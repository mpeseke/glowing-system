import { useContext } from "react";
import HeaderNav from "../components/HeaderNav";
import { FavoritesContext } from "../App";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <HeaderNav />
      <h2>Favorites</h2>
      {favorites
        ? favorites.map((fav) => (
            <div key={fav.id}>
              <h4>{fav.name}</h4>
            </div>
          ))
        : null}
    </>
  );
}
