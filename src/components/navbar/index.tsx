import { UserButton } from "../UserButton";
import { Logo } from "./logo";
import Routes from "./routes";

export const Navbar = () => {
  return (
    <header className="fixed flex justify-between px-4 py-2 w-full bg-orange-900 z-30">
      <div className="flex items-center">
        <Logo />
        <Routes />
      </div>
      <UserButton />
    </header>
  );
};
