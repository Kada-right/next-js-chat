import TopNav from "@/ui/dashboard/top-nav";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <div>
      <TopNav />
    </div>
      <div>
        {children}
      </div>
    </>      
  );
}