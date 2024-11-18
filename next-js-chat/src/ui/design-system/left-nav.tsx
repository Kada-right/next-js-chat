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

  type CustomLinkprops = {
    href: string; 
    name: string;
    isHidden: boolean;
  }

  const CustomLink = ({ href, name, isHidden }: CustomLinkprops) => {
    return (
      <Link 
        className="pl-6 hover:bg-slate-300 w-full py-1" 
        href={href}
        hidden={isHidden}
      >
        {name}
      </Link>
    );
  };


  return (
    <div className="bg-slate-400 w-40 flex flex-col items-start border-2 border-red-600">
      <button
        className="hover:bg-slate-300 font-bold flex w-full items-center justify-between pl-2 pr-2 py-2"
        onClick={toggleFoundationButton}
      >
        <span className="pl-2">Foundations</span>
        {hideFoundation ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      <div className="flex flex-col w-full">
        <CustomLink 
          href="/design-system/colors"
          name="Colors"
          isHidden={hideFoundation}

        />
        <CustomLink 
          href="/design-system/layouts"
          name="Layouts"
          isHidden={hideFoundation}

        />
        <CustomLink 
          href="/design-system/typography"
          name="Typography"
          isHidden={hideFoundation}

        />
      </div>
      <button
        className="hover:bg-slate-300 font-bold flex w-full items-center justify-between pl-2 pr-2 py-2"
        onClick={toggleComponentsButton}
      >
        <span className="pl-2">Components</span>
        {hideComponent ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      <div className="flex flex-col w-full">
        <Link
          className="pl-6 hover:bg-slate-300 w-full py-1"
          hidden={hideComponent}
          href={"/design-system/buttons"}
        >
          Buttons
        </Link>
      </div>
      <button
        className="hover:bg-slate-300 font-bold flex w-full items-center justify-between pl-2 pr-2 py-2"
        onClick={togglePatternsButton}
      >
        <span className="pl-2">Patterns</span>
        {hidePatterns ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      <div className="flex flex-col w-full">
        <Link
          className="pl-6 hover:bg-slate-300 w-full py-1"
          hidden={hidePatterns}
          href={"/design-system/forms"}
        >
          Forms
        </Link>
      </div>
    </div>
  );
}
