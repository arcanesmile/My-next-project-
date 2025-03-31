'use client'
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import styles from "@/styles/Blog/blogLayout.module.scss";

export default function BlogLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={styles.navbar}>
        <div className={styles.dropdown}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={styles.menuButton}
          >
            <FaBars />
          </button>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li><Link href="/blog?category=Graphics">Graphics</Link></li>
              <li><Link href="/blog?category=UI/UX">UI/UX</Link></li>
              <li><Link href="/blog?category=Software">Software</Link></li>
              <li><Link href="/blog?category=All">All</Link></li>
            </ul>
          )}
        </div>

        <h3 className={styles.title}>Welcome To Our Blog</h3>

        <div className={styles.searchWrapper}>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
              autoFocus
            />
          )}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={styles.searchButton}
          >
            <FaSearch />
          </button>
        </div>
      </div>
  );
}