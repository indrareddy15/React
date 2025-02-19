/* eslint-disable react/prop-types */
import { config } from "./config.js";
import { useState, useCallback } from "react";

// Update node's checked state based on parent node's checked state
const updateNodeCheckedState = (nodes, id, checked, parentChecked) => {
  if (!nodes?.length) return [];
  return nodes.map((node) => {
    const childNodes = updateNodeCheckedState(
      node?.items,
      id,
      checked,
      node.id === id ? checked : parentChecked
    );

    return {
      ...node,
      checked: node.id === id ? checked : parentChecked ?? node.checked,
      items: childNodes,
    };
  });
};

// Update checked state for child nodes, ensuring all are either checked or unchecked
const updateChildNodeCheckedState = (nodes) => {
  if (!nodes?.length) return [];
  return nodes.map((node) => {
    const childNodes = updateChildNodeCheckedState(node?.items);
    const allChecked = childNodes.every((childNode) => childNode.checked);
    return {
      ...node,
      checked: childNodes.length > 0 ? allChecked : node.checked,
      items: childNodes,
    };
  });
};

// Checkbox component for individual checkboxes
const CheckboxItem = ({ data, setData, padding, name, id, checked }) => {
  const handleChange = useCallback(
    (e) => {
      setData(
        updateChildNodeCheckedState(
          updateNodeCheckedState(data, id, e.target.checked, null)
        )
      );
      e.stopPropagation();
    },
    [data, id, setData]
  );

  return (
    <div style={{ paddingLeft: `${padding}px` }}>
      <input
        type="checkbox"
        checked={checked}
        name={name}
        id={id}
        onChange={handleChange}
      />
      <label htmlFor={name} style={{ paddingLeft: "5px" }}>
        {name}
      </label>
    </div>
  );
};

// Recursive component for rendering checkbox tree
const CheckboxTree = ({ originalData, data, padding, setData }) => {
  return (
    <>
      {data.map((d) => (
        <div key={d.id}>
          <CheckboxItem
            padding={padding}
            name={d.name}
            id={d.id}
            checked={d.checked}
            data={originalData}
            setData={setData}
          />
          {d?.items?.length > 0 && (
            <CheckboxTree
              data={d.items}
              padding={padding + 20}
              setData={setData}
              originalData={originalData}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default function App() {
  const [data, setData] = useState(config);

  return (
    <div className="App">
      <CheckboxTree
        data={data}
        originalData={data}
        padding={0}
        setData={setData}
      />
    </div>
  );
}
