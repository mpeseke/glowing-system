/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getEntry } from "../utils/api";
import { Suspense } from "react";
import FavoriteButton from "../components/FavoriteButton";

export async function loader({ params }) {
  const data = params;
  const entry = await getEntry(data.entryId);
  return entry;
}

export default function EntryPage() {
  const { data } = useLoaderData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h3>{data.name}</h3>
      <FavoriteButton entry={data} />
      <h4>Category: {data.category}</h4>
      <img src={data.image} alt={data.name} />
      <p>{data.description}</p>
    </Suspense>
  );
}
