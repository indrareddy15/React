import React, { useState } from "react";
import axios from "axios";


function BasicForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);

    const apiUrl = "http://localhost:5000/SavedData";

    try {
      axios.defaults.baseURL = apiUrl;
      axios.defaults.headers.post["Content-Type"] =
        "application/json;charset=utf-8";
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      axios.defaults.headers.post["Access-Control-Allow-Methods"] =
        "GET,PUT,POST,DELETE,PATCH,OPTIONS";
      axios.defaults.headers.post["Access-Control-Allow-Headers"] = "*";

      axios
        .post(apiUrl, jsonData)
        .then((response) => {
          console.log("Axios POST request made to API endpoint");
          console.log("Helllo", response.data);
        })
        .catch((err) => {
          console.error("Danger", err);
        });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <form className="job-application-form" onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
      <label className="form-field">
        Name:
        <input
          className="input-field"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label className="form-field">
        Email:
        <input
          className="input-field"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label className="form-field">
        Phone Number:
        <input
          className="input-field"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <label className="form-field">
        Address:
        <input
          className="input-field"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </label>
      <label className="form-field">
        Date of Birth:
        <input
          className="input-field"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        />
      </label>
      <label className="form-field">
        Gender:
        <select
          className="input-field"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="form-field">
        Marital Status:
        <select
          className="input-field"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </label>
      <label className="form-field">
        Nationality:
        <input
          className="input-field"
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
