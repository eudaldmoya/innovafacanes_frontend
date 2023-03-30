import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navWrapper}>
      <nav>
        <div className={styles.navTagsWrapper}>
          <Link href="/serveis" target="_blank" rel="noopener noreferrer">
            Serveis
          </Link>
          <Link href="/projectes" target="_blank" rel="noopener noreferrer">
            Projectes
          </Link>
          <Link href="/nosaltres" target="_blank" rel="noopener noreferrer">
            Nosaltres
          </Link>
          <Link href="/contacte" target="_blank" rel="noopener noreferrer">
            Contacte
          </Link>
          
        </div>
      </nav>
    </div>
  );
}
