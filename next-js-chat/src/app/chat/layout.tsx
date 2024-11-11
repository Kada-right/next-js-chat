import TopNav from "../../../ui/top-nav";

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