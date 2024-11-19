import GroupLinks from "../group-link";
import { componentsLinks, foundationLinks, patternLinks } from "./links";

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
        overflow-y-auto
      "
    >
      <GroupLinks name="foundations" links={foundationLinks} />
      <GroupLinks name="components" links={componentsLinks} />
      <GroupLinks name="patterns" links={patternLinks} />
    </div>
  );
}
