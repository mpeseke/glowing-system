import { Link } from "react-router-dom";
import styles from "./GridItem.module.css";

export default function GridItem({ item }) {
  return (
    <div className={styles.gridContainer}>
      <img src={item.image} alt={item.name} />
      <div className={styles.text}>
        <Link to={`search/entries/${item.id}`}>
          <p>{item.name}</p>
        </Link>
      </div>
    </div>
  );
}
