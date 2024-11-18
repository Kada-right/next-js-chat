"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "Buttons",
    href: "/design-system/buttons",
  },
  {
    name: "Forms",
    href: "/design-system/form",
  }
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="bg-fuchsia-600 w-40">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              {
                "bg-slate-300 ": pathname === link.href,
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
