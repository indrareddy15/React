import React, { useState } from "react";

const XTable = () => {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [tData, setTData] = useState(initialData);

  const handleSortByDate = () => {
    const sortedData = [...tData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA !== dateB) {
        return dateB - dateA;
      }

      return b.views - a.views;
    });
    setTData(sortedData);
  };

  const handleSortByView = () => {
    const sortByView = [...tData].sort((a, b) => {
      if (a.views !== b.views) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setTData(sortByView);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByView}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tData.map((item, id) => (
            <tr key={id}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
