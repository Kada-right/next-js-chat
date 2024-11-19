import GroupLink from "../group-link";
import { DesignLink } from "@/utils/types";

const foundationLinks: DesignLink[] = [
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
const componentsLinks: DesignLink[] = [
  {
    href: "/design-system/button",
    name: "buttons",
  }
];
const patternLinks: DesignLink[] = [
  {
    href: "/design-system/forms",
    name: "forms"
  }
];



export function LeftNav() {
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
      <GroupLink name="foundations" designLinks={foundationLinks} />
      <GroupLink name="components" designLinks={componentsLinks} />
      <GroupLink name="patterns" designLinks={patternLinks} />
    </div>
  );
}
