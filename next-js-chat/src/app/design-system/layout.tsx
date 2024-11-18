// components/Layout.js

import { NavLinks } from "@/ui/design-system/left-nav";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-[240px] bg-slate-400 h-screen sticky top-0 overflow-y-auto flex-shrink-0">
        <NavLinks />
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
