import React, { useState } from "react";
import Item from "./Items";

const PackingItemsList = ({
  listItems,
  onDeleteItems,
  onUpdateItems,
  onClearList,
}: any) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = listItems;

  if (sortBy === "description")
    sortedItems = listItems
      .slice()
      .sort((a: any, b: any) => a.description.localeCompare(b.description));

  if (sortedItems === "packed")
    sortedItems = listItems
      .slice()
      .sort((a: any, b: any) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems?.map((items: any) => (
          <Item
            onDeleteItems={onDeleteItems}
            item={items}
            key={items.id}
            onUpdateItems={onUpdateItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingItemsList;
