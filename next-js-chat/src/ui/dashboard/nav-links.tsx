"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import RegularButton from "../design-system/buttons/regular-button";

const links = [
  {
    name: "Stats",
    href: "/stats",
  },
  {
    name: "Chat",
    href: "/chat",
  },
  {
    name: "Logout",
    href: "/",
  },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex justify-end">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "ml-2",
              {
                "": pathname === link.href,
              },
            )}
          >
            <RegularButton name={link.name}/>
          </Link>
        );
      })}
    </div>
  );
}
