import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center font-black hover:bg-orange-950/50 py-1 px-2 rounded-sm"
    >
      TDA Daily Diary
    </Link>
  );
};
