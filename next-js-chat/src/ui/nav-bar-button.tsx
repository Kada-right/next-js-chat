"use client";

import { useToggleSections, type FolderSection } from "@/utils/hooks";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import CustomLink from "./custom-link";
import { Index } from "drizzle-orm/mysql-core";

type Props = {
  folderSection: FolderSection;
  name: "Foundations" | "Components" | "Patterns";
  // eslint-disable-next-line no-unused-vars
  onclick: (section: FolderSection) => void;
  isHidden: boolean;
};
const designLinks = [
  {
    href: "/design-system/colors",
    name: "colors",
  },
  {
    href: "/design-system/layouts",
    name: "layouts",
  },
  {
    href: "/design-system/typography",
    name: "typography",
  },
];
export default function NavBarButton({
  folderSection,
  name,
  isHidden,
  onclick,
}: Props) {
  const { hiddenStates, toggleSection } = useToggleSections();

  return (
    <>
      <button
        className="hover:bg-slate-300 font-bold flex w-full items-center justify-between pl-2 pr-2 py-2"
        onClick={() => onclick(folderSection)}
      >
        {name}
        {isHidden ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      <div className="flex flex-col w-full">
      {designLinks.map((link, index) => <CustomLink key={index} href={link.href} name={link.name} isHidden={false}  />)}
      </div>
    </>
  );
}
