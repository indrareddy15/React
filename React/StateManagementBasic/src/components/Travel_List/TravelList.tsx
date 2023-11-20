import React, { useState } from "react";
import "./TravelList.css";

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 3,
    description: "Charger",
    quantity: 1,
    packed: true,
  },
];

const Logo = () => {
  return (
    <>
      <h1>🌴 For Away 👜</h1>
    </>
  );
};

const Form = ({ onAddItems }: any) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity]: any = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Items..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

const PackingList = ({
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

const Item = ({ item, onDeleteItems, onUpdateItems }: any) => {
  return (
    <>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItems(item.id)}
      />
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    </>
  );
};

const Stats = ({ items }: any) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to yout packing list👁‍🗨</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item: any) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You have got everything! Ready to go ✈"
            : `You have ${numItems} items on your list, and you already packed
          ${packedItems} (${percentage}%)`}
        </em>
      </footer>
    </>
  );
};

const TravelList = () => {
  const [items, setItems]: any = useState(initialItems);

  const handleItems = (item: any) => {
    setItems((items: any) => [...items, item]);
  };

  const handleDelete = (id: any) => {
    setItems((items: any) => items.filter((item: any) => item.id !== id));
  };

  const handleUpdate = (id: any) => {
    setItems((items: any) =>
      items.map((item: any) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleItems} />
        <PackingList
          listItems={items}
          onDeleteItems={handleDelete}
          onUpdateItems={handleUpdate}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
      ;
    </>
  );
};

export default TravelList;
