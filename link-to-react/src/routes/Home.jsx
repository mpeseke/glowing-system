import { useEffect, useState, lazy, Suspense } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import HeaderNav from "../components/HeaderNav";
import { getAllEntries } from "../utils/api";

export default function Home() {
  const [entries, setEntries] = useState([]);

  const CategoryGrid = lazy(() => import("../components/CategoryGrid.jsx"));

  const entriesByCategory = (entries) => {
    const sort = entries.data.reduce((acc, entry) => {
      if (!acc[entry.category]) {
        acc[entry.category] = [];
      }
      acc[entry.category].push(entry);
      return acc;
    }, {});

    const sortedEntries = Object.values(sort);
    return sortedEntries;
  };

  useEffect(() => {
    async function fetchData() {
      setEntries(entriesByCategory(await getAllEntries()));
    }

    fetchData();
  }, []);

  return (
    <>
      <HeaderNav />
      <h2>Link to React Compendium</h2>
      <div>
        <Tabs.Root defaultValue="equipment">
          <Tabs.List>
            {entries
              ? entries.map((entryArray) => {
                  const categoryName = entryArray[0].category;
                  return (
                    <Tabs.Trigger key={categoryName} value={categoryName}>
                      {categoryName}
                    </Tabs.Trigger>
                  );
                })
              : null}
          </Tabs.List>

          {entries ? (
            entries.map((entryArray) => {
              const categoryName = entryArray[0].category;

              return (
                <Tabs.Content key={categoryName} value={categoryName}>
                  <Suspense fallback={<div>Loading...~</div>}>
                    <CategoryGrid
                      key={categoryName}
                      categoryData={entryArray}
                    />
                  </Suspense>
                </Tabs.Content>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </Tabs.Root>
      </div>
    </>
  );
}
