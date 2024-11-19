import TopNav from "@/ui/dashboard/top-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <TopNav />
      {children}
    </main>
  );
}
