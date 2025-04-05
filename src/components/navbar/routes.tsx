import { DiscIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Routes = () => {
  const routes = [
    {
      label: "Records",
      href: "/records",
      icon: DiscIcon,
    },
  ];
  return (
    <nav className="flex items-center px-6">
      <ul className="flex gap-x-4 items-center">
        {routes.map(({ label, href, icon: Icon }, index) => (
          <Link
            className="flex items-center gap-x-1 hover:text-white active:text-blue-300 hover:underline"
            href={href}
            key={index}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Routes;
