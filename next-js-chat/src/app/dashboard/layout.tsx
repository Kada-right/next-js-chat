import TopNav from "@/ui/dashboard/top-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pr-24 pt-4">
        <TopNav />
      </div>
      <div>{children}</div>
    </>
  );
}
