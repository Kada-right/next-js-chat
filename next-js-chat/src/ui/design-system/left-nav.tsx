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
      <GroupLinks name="Foundations" links={foundationLinks} />
      <GroupLinks name="Components" links={componentsLinks} />
      <GroupLinks name="Patterns" links={patternLinks} />
    </div>
  );
}
