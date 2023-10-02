import styles from "./HeaderNav.module.css";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <nav className={styles.headerNav}>
      <ul>
        <li>
          <Link className={styles.navLink} to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to={"/search"}>
            Search
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to={"/favorites"}>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
