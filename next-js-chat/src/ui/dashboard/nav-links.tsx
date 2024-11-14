"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "Stats",
    href: "/dashboard/stats",
  },
  {
    name: "Chat",
    href: "/dashboard/chat",
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
              "mr-1 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-400 p-3 text-sm font-medium hover:bg-slate-300 md:flex-none md:justify-start md:p-2 md:px-3",
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
