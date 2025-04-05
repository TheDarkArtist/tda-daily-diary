import { LogOutIcon, UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { auth, signOut } from "../../../auth";

export const UserButton = async () => {
  const session = await auth();

  if (!session?.user) {
    return (
      <Link
        className="bg-orange-950/50 px-2 py-1 rounded-sm"
        href="/auth/login"
      >
        Login
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-center items-center rounded-full aspect-square size-8 bg-orange-950 hover:bg-yellow-800 cursor-pointer">
        <span className="flex justify-center items-center rounded-full aspect-square size-7 bg-zinc-800">
          <span className="font-bold text-xl text-zinc-300">K</span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link className="cursor-pointer" href={`/${session.user.username}`}>
              <UserIcon /> Profile
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <DropdownMenuItem asChild>
            <button className="cursor-pointer w-full">
              <LogOutIcon /> Log Out
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
