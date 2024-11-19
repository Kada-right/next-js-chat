"use client";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import CustomLink from "./custom-link";
import { SetStateAction, useState } from "react";
import { DesignLink } from "./design-system/links";
import { LinkButton } from "./design-system/buttons/link-button";

type Props = {
  name: "foundations" | "components" | "patterns";
  links: DesignLink[];
};

export default function GroupLinks({ name, links: designLinks }: Props) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <LinkButton name={name} isHidden={isHidden} setIsHidden={setIsHidden} /> 
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
