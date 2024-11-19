"use client";

import CustomLink from "../custom-link";
import { useToggleSections } from "@/utils/hooks";
import NavBarButton from "../nav-bar-button";

export function NavLinks() {
  const { hiddenStates, toggleSection } = useToggleSections();

  return (
    <div
      className="
        bg-slate-100
        w-[240px] 
        flex 
        flex-col 
        items-start 
        border-r-2
        h-screen 
        sticky 
        top-0 
        overflow-y-auto
      "
    >
      <NavBarButton
        onclick={toggleSection}
        folderSection="foundations"
        name="Foundations"
        isHidden={hiddenStates.foundations}
      />
      <div className="flex flex-col w-full">
        <CustomLink
          href="/design-system/colors"
          name="Colors"
          isHidden={hiddenStates.foundations}
        />
        <CustomLink
          href="/design-system/layouts"
          name="Layouts"
          isHidden={hiddenStates.foundations}
        />
        <CustomLink
          href="/design-system/typography"
          name="Typography"
          isHidden={hiddenStates.foundations}
        />
      </div>
      <NavBarButton
        onclick={toggleSection}
        folderSection="components"
        name="Components"
        isHidden={hiddenStates.components}
      />
      <div className="flex flex-col w-full">
        <CustomLink
          href="/design-system/buttons"
          name="Buttons"
          isHidden={hiddenStates.components}
        />
      </div>  
      <NavBarButton
        onclick={toggleSection}
        folderSection="patterns"
        name="Patterns"
        isHidden={hiddenStates.patterns}
      />
      <div className="flex flex-col w-full">
        <CustomLink
          href="/design-system/forms"
          name="Forms"
          isHidden={hiddenStates.patterns}
        />
      </div>
    </div>
  );
}
