"use client";

import CustomLink from "./custom-link";
import { DesignLink } from "./design-system/links";
import { LinkButton } from "./design-system/buttons/link-button";
import { useState } from "react";

type Props = {
  name: "Foundations" | "Components" | "Patterns";
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
