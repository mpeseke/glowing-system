import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import Favorites from "./routes/Favorites";
import Search from "./routes/Search";
import Home from "./routes/Home";
import EntryPage, { loader as entryLoader } from "./routes/EntryPage";
import React, { useState } from "react";

export const FavoritesContext = React.createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (entry) => {
    setFavorites([...favorites, entry]);
  };

  const removeFromFavorites = (entry) => {
    setFavorites(favorites.filter((i) => i.id !== entry.id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/search",
    element: <Search />,
    children: [
      {
        path: "entries/:entryId",
        element: <EntryPage />,
        loader: entryLoader,
      },
    ],
  },
]);

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export default App;
