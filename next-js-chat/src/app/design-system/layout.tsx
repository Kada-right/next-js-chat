import { NavLinks } from "../../ui/design-system/left-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row min-h-screen">
    <NavLinks/>
      <div className="flex-grow bg-slate-600">{children}</div>
    </div>
  );
}
