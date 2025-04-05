"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../db/schema";

export const getUserById = async (userId: string) => {
  try {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    return user;
  } catch (err) {
    console.log(err);
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);

    return user[0];
  } catch (err) {
    console.log(err);
  }
};
