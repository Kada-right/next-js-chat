import GroupLink from "../group-link";
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
      <GroupLink name="foundations" links={foundationLinks} />
      <GroupLink name="components" links={componentsLinks} />
      <GroupLink name="patterns" links={patternLinks} />
    </div>
  );
}
