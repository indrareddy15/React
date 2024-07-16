// import React from "react";

// /**
//  * Forecast component renders a five-day weather forecast.
//  *
//  * @component
//  * @param {Object} props - Component props.
//  * @param {Array} props.forecast - List of forecast data.
//  * @returns {JSX.Element} The rendered component.
//  */
// const Forecast = ({ forecast }) => (
//   <div>
//     {forecast.length > 0 ? (
//       <ul>
//         {forecast.map((day, index) => (
//           <li key={index}>
//             <p>{day.date}</p>
//             <p>{day.temperature}°C</p>
//             <p>{day.description}</p>
//           </li>
//         ))}
//       </ul>
//     ) : (
//       <p>No forecast data available</p>
//     )}
//   </div>
// );

// export default Forecast;
