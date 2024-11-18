"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  {
    name: "Forms",
    href: "/design-system/forms",
  },
];

export function NavLinks() {
  const [hideFoundation, setHideFoundation] = useState(true);
  const [hideComponent, setHideComponent] = useState(true);

  const toggleFoundationButton = () => {
    setHideFoundation(!hideFoundation);
  };
  const toggleComponentsButton = () => {
    setHideComponent(!hideComponent);
  };

  return (
    <div className="bg-fuchsia-600 w-40 flex flex-col items-start">
      <button onClick={toggleFoundationButton}>Foundations</button>
      <div className="ml-4 flex flex-col">
        <Link hidden={hideFoundation} href={"/design-system/colors"}>
          Colors
        </Link>
        <Link hidden={hideFoundation} href={"/design-system/layouts"}>
          Layouts
        </Link>
        <Link hidden={hideFoundation} href={"/design-system/typography"}>
          Typography
        </Link>
      </div>
      <button onClick={toggleComponentsButton}>Components</button>
      <Link hidden={hideComponent} href={"/design-system/buttons"}>
        Buttons
      </Link>
      <button onClick={toggleComponentsButton}>Patterns</button>
      <Link hidden={hideComponent} href={"/design-system/forms"}>
        Forms
      </Link>
    </div>
  );
}
