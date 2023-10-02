const getEntry = async (entryId) => {
  const response = await fetch(
    `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${entryId}`
  );
  const entry = await response.json();
  return entry;
};

const getAllEntries = async () => {
  const response = await fetch(
    "https://botw-compendium.herokuapp.com/api/v3/compendium/all"
  );
  const entries = await response.json();
  return entries;
};

export { getEntry, getAllEntries };
