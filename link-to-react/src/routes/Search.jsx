import { Form, Outlet, useNavigate } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import styles from "./Search.module.css";
import FavoritesList from "../components/FavoritesList";

export default function Search() {
  const navigate = useNavigate();
  const searchEntries = (event) => {
    event.preventDefault();
    navigate(`/search/entries/${event.target.elements.query.value}`);
  };

  return (
    <>
      <HeaderNav />
      <div className={styles.sideNav}>
        <h2>Search</h2>
        <Form onSubmit={searchEntries}>
          <input name="query" />
          <button type="submit">Search</button>
        </Form>
        <FavoritesList />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
}
