"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export function NavLinks() {
  const [hideFoundation, setHideFoundation] = useState(true);
  const [hideComponent, setHideComponent] = useState(true);
  const [hidePatterns, setHidePatterns] = useState(true);

  const toggleFoundationButton = () => {
    setHideFoundation(!hideFoundation);
  };
  const toggleComponentsButton = () => {
    setHideComponent(!hideComponent);
  };
  const togglePatternsButton = () => {
    setHidePatterns(!hidePatterns);
  };

  return (
    <div className="hover:bg-slate-300bg-slate-400 w-40 flex flex-col items-start">
      <button 
        className=" hover:bg-slate-300 font-bold flex w-full items-center justify-between"
        onClick={toggleFoundationButton}
      >
        <span>Foundations</span>
        {hideFoundation ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      <div className="hover:bg-slate-200 w-full ml-4 flex flex-col">
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
      <button
        className="hover:bg-slate-300 font-bold flex w-full items-center justify-between"
        onClick={toggleComponentsButton}
      >
        Components
        {hideComponent ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      <div className="hover:bg-slate-200 ml-4 flex flex-col w-full">
        <Link hidden={hideComponent} href={"/design-system/buttons"}>
          Buttons
        </Link>
      </div>

      <button
        className=" hover:bg-slate-300 font-bold flex w-full items-center justify-between"
        onClick={togglePatternsButton}
      >
        Patterns
        {hidePatterns ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      <div className="hover:bg-slate-200 ml-4 flex flex-col w-full">
        <Link hidden={hidePatterns} href={"/design-system/forms"}>
          Forms
        </Link>
      </div>
    </div>
  );
}
