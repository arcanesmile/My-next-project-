import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css"; // Import global styles

export const metadata: Metadata = {
  title: "My Next.js 13 App",
  description: "A simple Next.js 13 app with navigation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}