import { useContext } from "react";
import { FavoritesContext } from "../App";

export default function FavoritesList() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <ul>
      {favorites
        ? favorites.map((entry) => <li key={entry.id}>{entry.name}</li>)
        : null}
    </ul>
  );
}
