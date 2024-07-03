import React, { useState } from "react";
import "./CustomerManagement.css";

const SearchForm = ({ searchParams, onSearchChange, onSearch, onClear }) => {
  return (
    <div className="search-form">
      <input
        name="customerName"
        placeholder="Customer Name"
        value={searchParams.customerName}
        onChange={onSearchChange}
      />
      <input
        name="customerCode"
        placeholder="Customer Code"
        value={searchParams.customerCode}
        onChange={onSearchChange}
      />
      <input
        name="customerType"
        placeholder="Customer Type"
        value={searchParams.customerType}
        onChange={onSearchChange}
      />
      <input
        name="environmentType"
        placeholder="Environment Type"
        value={searchParams.environmentType}
        onChange={onSearchChange}
      />
      <input
        name="status"
        placeholder="Status"
        value={searchParams.status}
        onChange={onSearchChange}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      <button type="button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

const SearchResult = ({ results, onCustomerClick }) => {
  return (
    <div className="search-results">
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Type</th>
            <th>Primary Contact Person</th>
            <th>License Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} onClick={() => onCustomerClick(result)}>
              <td>{result.customerName}</td>
              <td>{result.customerType}</td>
              <td>{result.primaryContactPerson}</td>
              <td>{result.licenseType}</td>
              <td>{result.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CustomerDetails = ({ customer }) => {
  return (
    <div>
      <div className="customer-details-form">
        <input
          name="customerName"
          placeholder="Customer Name"
          value={customer.customerName}
          readOnly
        />
        <input
          name="customerCode"
          placeholder="Customer Code"
          value={customer.customerCode}
          readOnly
        />
        <input
          name="customerType"
          placeholder="Customer Type"
          value={customer.customerType}
          readOnly
        />
        <input
          name="primaryContactPerson"
          placeholder="Primary Contact Person"
          value={customer.primaryContactPerson}
          readOnly
        />
        <input
          name="environmentType"
          placeholder="Environment Type"
          value={customer.environmentType}
          readOnly
        />
        <input
          name="licenseValidityFrom"
          placeholder="License Validity From"
          value={customer.licenseValidityFrom}
          readOnly
        />
        <input
          name="licenseValidityTo"
          placeholder="License Validity To"
          value={customer.licenseValidityTo}
          readOnly
        />
        <input
          name="numberOfUsersAllowed"
          placeholder="Number Of Users Allowed"
          value={customer.numberOfUsersAllowed}
          readOnly
        />
        <input
          name="numberOfOuAllowed"
          placeholder="Number Of OU Allowed"
          value={customer.numberOfOuAllowed}
          readOnly
        />
        <input
          name="licenseType"
          placeholder="License Type"
          value={customer.licenseType}
          readOnly
        />

        <div className="additional-details">
          <h3>SBU Details</h3>
          <ul>
            {customer.sbuDetails.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>IT Contact Person</h3>
          <ul>
            {customer.itContactPerson.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const LicenseManager = () => {
  const [searchParams, setSearchParams] = useState({
    customerName: "",
    customerCode: "",
    customerType: "",
    environmentType: "",
    status: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleSearchChange = (e) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = () => {
    const results = [
      {
        customerName: "Customer 1",
        customerType: "Type A",
        primaryContactPerson: "Contact 1",
        licenseType: "License A",
        status: "Active",
        licenseValidityFrom: "2023-01-01",
        licenseValidityTo: "2024-01-01",
        numberOfUsersAllowed: 100,
        numberOfOuAllowed: 10,
        sbuDetails: ["SBU 1", "SBU 2"],
        itContactPerson: ["IT Contact 1", "IT Contact 2"],
      },
      {
        customerName: "Customer 2",
        customerType: "Type B",
        primaryContactPerson: "Contact 2",
        licenseType: "License B",
        status: "Inactive",
        licenseValidityFrom: "2022-01-01",
        licenseValidityTo: "2023-01-01",
        numberOfUsersAllowed: 200,
        numberOfOuAllowed: 20,
        sbuDetails: ["SBU 3", "SBU 4"],
        itContactPerson: ["IT Contact 3", "IT Contact 4"],
      },
    ];
    setSearchResults(results);
  };

  const handleClear = () => {
    setSearchParams({
      customerName: "",
      customerCode: "",
      customerType: "",
      environmentType: "",
      status: "",
    });
    setSearchResults([]);
    setSelectedCustomer(null);
  };

  return (
    <div className="customer-management">
      <SearchForm
        searchParams={searchParams}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      {searchResults.length > 0 && (
        <SearchResult
          results={searchResults}
          onCustomerClick={setSelectedCustomer}
        />
      )}
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default LicenseManager;
