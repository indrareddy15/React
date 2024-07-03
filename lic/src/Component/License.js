// import React, { useState } from "react";
// import "./CustomerManagement.css";

// function CustomerManagement() {
//   const [searchParams, setSearchParams] = useState({
//     customerName: "",
//     customerCode: "",
//     customerType: "",
//     environmentType: "",
//     status: "",
//   });

//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);

//   const handleSearchChange = (e) => {
//     setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
//   };

//   const handleSearch = () => {
//     // Simulate search results
//     const results = [
//       {
//         customerName: "Customer 1",
//         customerType: "Type A",
//         primaryContactPerson: "Contact 1",
//         licenseType: "License A",
//         status: "Active",
//         licenseValidityFrom: "2023-01-01",
//         licenseValidityTo: "2024-01-01",
//         numberOfUsersAllowed: 100,
//         numberOfOuAllowed: 10,
//         sbuDetails: ["SBU 1", "SBU 2"],
//         itContactPerson: ["IT Contact 1", "IT Contact 2"],
//       },
//       {
//         customerName: "Customer 2",
//         customerType: "Type B",
//         primaryContactPerson: "Contact 2",
//         licenseType: "License B",
//         status: "Inactive",
//         licenseValidityFrom: "2022-01-01",
//         licenseValidityTo: "2023-01-01",
//         numberOfUsersAllowed: 200,
//         numberOfOuAllowed: 20,
//         sbuDetails: ["SBU 3", "SBU 4"],
//         itContactPerson: ["IT Contact 3", "IT Contact 4"],
//       },
//     ];
//     setSearchResults(results);
//   };

//   const handleClear = () => {
//     setSearchParams({
//       customerName: "",
//       customerCode: "",
//       customerType: "",
//       environmentType: "",
//       status: "",
//     });
//     setSearchResults([]);
//     setSelectedCustomer(null);
//   };

//   const handleCustomerClick = (customer) => {
//     setSelectedCustomer(customer);
//   };

//   return (
//     <div className="customer-management">
//       <div className="search-form">
//         <input
//           name="customerName"
//           placeholder="Customer Name"
//           value={searchParams.customerName}
//           onChange={handleSearchChange}
//         />
//         <input
//           name="customerCode"
//           placeholder="Customer Code"
//           value={searchParams.customerCode}
//           onChange={handleSearchChange}
//         />
//         <input
//           name="customerType"
//           placeholder="Customer Type"
//           value={searchParams.customerType}
//           onChange={handleSearchChange}
//         />
//         <input
//           name="environmentType"
//           placeholder="Environment Type"
//           value={searchParams.environmentType}
//           onChange={handleSearchChange}
//         />
//         <input
//           name="status"
//           placeholder="Status"
//           value={searchParams.status}
//           onChange={handleSearchChange}
//         />
//         <button onClick={handleSearch}>Search</button>
//         <button onClick={handleClear}>Clear</button>
//       </div>

//       {searchResults.length > 0 && (
//         <div className="search-results">
//           <table>
//             <thead>
//               <tr>
//                 <th>Customer Name</th>
//                 <th>Customer Type</th>
//                 <th>Primary Contact Person</th>
//                 <th>License Type</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {searchResults.map((result, index) => (
//                 <tr key={index} onClick={() => handleCustomerClick(result)}>
//                   <td>{result.customerName}</td>
//                   <td>{result.customerType}</td>
//                   <td>{result.primaryContactPerson}</td>
//                   <td>{result.licenseType}</td>
//                   <td>{result.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {selectedCustomer && (
//         <div>
//           <div className="customer-details-form">
//             <input
//               name="customerName"
//               placeholder="Customer Name"
//               value={selectedCustomer.customerName}
//               readOnly
//             />
//             <input
//               name="customerCode"
//               placeholder="Customer Code"
//               value={selectedCustomer.customerCode}
//               readOnly
//             />
//             <input
//               name="customerType"
//               placeholder="Customer Type"
//               value={selectedCustomer.customerType}
//               readOnly
//             />
//             <input
//               name="primaryContactPerson"
//               placeholder="Primary Contact Person"
//               value={selectedCustomer.primaryContactPerson}
//               readOnly
//             />
//             <input
//               name="environmentType"
//               placeholder="Environment Type"
//               value={selectedCustomer.environmentType}
//               readOnly
//             />
//             <input
//               name="licenseValidityFrom"
//               placeholder="License Validity From"
//               value={selectedCustomer.licenseValidityFrom}
//               readOnly
//             />
//             <input
//               name="licenseValidityTo"
//               placeholder="License Validity To"
//               value={selectedCustomer.licenseValidityTo}
//               readOnly
//             />
//             <input
//               name="numberOfUsersAllowed"
//               placeholder="Number Of Users Allowed"
//               value={selectedCustomer.numberOfUsersAllowed}
//               readOnly
//             />
//             <input
//               name="numberOfOuAllowed"
//               placeholder="Number Of OU Allowed"
//               value={selectedCustomer.numberOfOuAllowed}
//               readOnly
//             />
//             <input
//               name="licenseType"
//               placeholder="License Type"
//               value={selectedCustomer.licenseType}
//               readOnly
//             />

//             <div className="additional-details">
//               <h3>SBU Details</h3>
//               <ul>
//                 {selectedCustomer.sbuDetails.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//               <h3>IT Contact Person</h3>
//               <ul>
//                 {selectedCustomer.itContactPerson.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CustomerManagement;
