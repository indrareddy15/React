import React, { useState } from "react";

const GenerateTable = () => {
  const [row, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [matrix, setMatrix] = useState([]);

  const handleRowchange = (e) => {
    setRows(parseInt(e.target.value));
  };

  const handleColChange = (e) => {
    setCols(parseInt(e.target.value));
  };

  const handleGenerate = () => {
    let newMatrix = [];
    for (let i = 0; i < row; i++) {
      let rows = [];
      for (let j = 0; j < cols; j++) {
        rows.push(0);
      }
      newMatrix.push(rows);
    }
    setMatrix(newMatrix);
  };

  return (
    <div>
      <h1>Generate Table</h1>
      <label className="label">
        Rows:
        <input
          className="row-input"
          type="number"
          value={row}
          onChange={handleRowchange}
        />
      </label>
      <label className="label">
        Columns:
        <input
          className="col-input"
          type="number"
          value={cols}
          onChange={handleColChange}
        />
      </label>
      <button className="button" onClick={handleGenerate}>
        Generate Matrix
      </button>
      <table>
        <tbody>
          {matrix?.map((row, index) => (
            <tr key={index}>
              {row?.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenerateTable;


// const data = "Indra"
// data ? "Indra" : "NA"