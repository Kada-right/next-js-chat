import { LeftNav } from "@/ui/design-system/left-nav";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-[240px] bg-slate-400 h-screen sticky top-0 overflow-y-auto flex-shrink-0">
        <LeftNav />
      </aside>
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
