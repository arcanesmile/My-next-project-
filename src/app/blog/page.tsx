"use client";
import { useSearchParams } from "next/navigation";
import BlogPost from "@/components/BlogPost";
import styles from "./blogPage.module.scss";

const blogPosts = [
  {
    title: "Software",
    description: "This is the first software blog post.",
    image: "/images/blog1.jpg",
    category: "Software",
  },
  {
    title: "UI/UX",
    description: "This is the first UI/UX blog post.",
    image: "/images/blog2.jpg",
    category: "UI/UX",
  },
  {
    title: "Graphics",
    description: "This is the first Graphics blog post.",
    image: "/images/blog3.jpg",
    category: "Graphics",
  },
];

export default function BlogPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "All";

  const filteredPosts =
    category === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === category);

  return (
    <div className={styles["blog-page"]}>
      <h1>Blog Posts</h1>
      <h2>{category}</h2>
      <div className={styles["blog-posts"]}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => <BlogPost key={index} {...post} />)
        ) : (
          <p>No posts found for this category.</p>
        )}
      </div>
    </div>
  );
}