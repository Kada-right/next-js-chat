import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World`s Slowest Chat",
  description: "Created by team Kåda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
