import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "",
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