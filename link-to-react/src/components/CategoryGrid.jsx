import GridItem from "./GridItem";

export default function CategoryGrid({ categoryData }) {
  return (
    <div>
      {categoryData.map((item) => {
        return <GridItem key={item.id} item={item} />;
      })}
    </div>
  );
}
