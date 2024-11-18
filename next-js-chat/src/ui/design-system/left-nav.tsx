"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

const links = [
  {
    name: "Buttons",
    href: "/design-system/buttons",
  },
  {
    name: "Colors",
    href: "/design-system/colors",
  },
  {
    name: "Forms",
    href: "/design-system/forms",
  },
  {
    name: "Layouts",
    href: "/design-system/layouts",
  },
  {
    name: "Typography",
    href: "/design-system/typography",
  }

];

export function NavLinks() {
  const [hideButtons, setHideButtons] = useState(true);

  const toggleHiddenButton = () => {
    setHideButtons(!hideButtons);
  };
  const pathname = usePathname();

  return (
    <div className="bg-fuchsia-600 w-40">
      <button onClick={toggleHiddenButton}>Show</button>
      <br/>
      {links.map((link) => {
        return (
          <Link
            hidden={hideButtons}
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
