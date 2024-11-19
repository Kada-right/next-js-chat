"use client";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import CustomLink from "./custom-link";
import { useState } from "react";
import { DesignLink } from "./design-system/links";

type Props = {
  name: "foundations" | "components" | "patterns";
  designLinks: DesignLink[];
};

export default function GroupLink({ name, designLinks }: Props) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <button
        className="hover:bg-slate-300 font-bold flex w-full items-center justify-between pl-2 pr-2 py-2"
        onClick={() => setIsHidden(!isHidden)}
      >
        {name}
        {isHidden ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      <div className="flex flex-col w-full">
        {designLinks.map((link, index) => (
          <CustomLink
            key={index}
            href={link.href}
            name={link.name}
            isHidden={isHidden}
          />
        ))}
      </div>
    </>
  );
}
