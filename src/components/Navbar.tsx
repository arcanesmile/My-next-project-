import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>BEM⚡</div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.profileIcon}>
        <Link href="/user/|">
          <Image src="/profile-icon.png" alt="Profile" width={35} height={35} />
        </Link>
      </div>
    </nav>
  );
}