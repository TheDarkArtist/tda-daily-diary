import { db } from "@/lib/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "@/lib/actions/user";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (!user.id || !account || !profile) return false;

      let username;
      if (account.provider === "github") {
        username = profile.login;
      } else if (account.provider === "google") {
        username = profile.email?.split("@")[0].replace(/[^a-zA-Z0-9]/g, "");
      }

      if (username) {
        await db
          .update(users)
          .set({ username } as { username: string })
          .where(eq(users.id, user.id));
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.username = token.username as string;
        session.user.image = token.picture;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.username = existingUser[0].username;

      return token;
    },
  },
});
