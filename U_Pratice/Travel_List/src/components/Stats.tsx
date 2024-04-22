import React from "react";

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

export default Stats;
    