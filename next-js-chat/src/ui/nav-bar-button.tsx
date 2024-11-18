"use client";

import type { FolderSection } from "@/utils/hooks";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

type Props = {
  folderSection: FolderSection;
  name: "Foundations" | "Components" | "Patterns";
  // eslint-disable-next-line no-unused-vars
  onclick: (section: FolderSection) => void;
  isHidden: boolean;
};

export default function NavBarButton({
  folderSection,
  name,
  isHidden,
  onclick,
}: Props) {
  return (
    <button
      className="hover:bg-slate-300 font-bold flex w-full items-center justify-between pl-2 pr-2 py-2"
      onClick={() => onclick(folderSection)}
    >
      {name}
      {isHidden ? <IoIosArrowForward /> : <IoIosArrowDown />}
    </button>
  );
}
