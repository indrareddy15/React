import React, { useState } from "react";
import Logo from "./Logo";
import PackingItemsList from "./PackingItems";
import Stats from "./Stats";
import Form from "./Form";

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
        <PackingItemsList
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
