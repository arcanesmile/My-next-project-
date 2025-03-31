import { ReactNode } from "react";
import BlogLayout from '@/components/BlogLayout';

export default function Blog({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <BlogLayout />
      <main>{children}</main>
    </div>
  );
}