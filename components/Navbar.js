import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navWrapper}>
      <nav>
        <div className={styles.navTagsWrapper}>
          <Link href="/serveis"  rel="noopener noreferrer">
            Serveis
          </Link>
          <Link href="/projectes" rel="noopener noreferrer">
            Projectes
          </Link>
          <Link href="/nosaltres" rel="noopener noreferrer">
            Nosaltres
          </Link>
          <Link href="/contacte" rel="noopener noreferrer">
            Contacte
          </Link>
          
        </div>
      </nav>
    </div>
  );
}
