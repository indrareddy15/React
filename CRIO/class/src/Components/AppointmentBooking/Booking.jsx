import axios from "axios";
import React, { useState, useCallback } from "react";
import "./booking.css";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    doctor: "",
    appointmentType: "",
    appointmentDateTime: "",
  });

  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFormDataChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmitFormData = useCallback(
    async (e) => {
      e.preventDefault();
      setLoad(true);
      try {
        await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          formData
        );
        setSuccess(true);
      } catch (error) {
        console.error("Error creating post:", error);
      } finally {
        setLoad(false);
      }
    },
    [formData]
  );

  const handleCancelAppointment = useCallback(() => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      doctor: "",
      appointmentType: "",
      appointmentDateTime: "",
    });
    setSuccess(false);
  }, []);

  return (
    <div className="container">
      {success ? (
        <div className="bkingSuccess">
          <h2>Appointment Booked Successfully</h2>
          <button className="cnclBtn" onClick={handleCancelAppointment}>
            Cancel Appointment
          </button>
        </div>
      ) : load ? (
        <div className="Scheduling">
          <h3>Scheduling the Appointment.....!</h3>
        </div>
      ) : (
        <form className="formData" onSubmit={handleSubmitFormData}>
          <h1>Book a Session</h1>
          <p>
            Fill in the Form below to book a virtual Session with your doctor
          </p>
          <div>
            <h3>Basic Info</h3>
            <div>
              <label className="label">
                FirstName :
                <input
                  className="name-input"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormDataChange}
                />
              </label>{" "}
              <br /> <br />
              <label className="label">
                LastName:
                <input
                  className="name-input"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormDataChange}
                />
              </label>{" "}
              <br /> <br />
              <label className="label">
                Email:
                <input
                  className="name-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormDataChange}
                />
              </label>
            </div>
          </div>
          <div>
            <h3>Doctor</h3>
            <select
              className="selectBtn"
              name="doctor"
              id="doctor"
              value={formData.doctor}
              onChange={handleFormDataChange}
            >
              <option value="Select">Select your Doctor</option>
              <option value="Dr.Samaram">Dr. Samaram</option>
              <option value="Dr.Shabi">Dr. Shabii</option>
              <option value="Dr.Senthil">Dr. Senthil</option>
            </select>
          </div>
          {formData.doctor && (
            <>
              <div>
                <h3>Where...?</h3>
                <input
                  className="radio_input"
                  type="radio"
                  id="gmeet"
                  name="appointmentType"
                  value="Google Meet"
                  onChange={handleFormDataChange}
                />
                <label htmlFor="gmeet">Google Meet</label>
                <br />
                <input
                  className="radio_input"
                  type="radio"
                  id="phn"
                  name="appointmentType"
                  value="Phone"
                  onChange={handleFormDataChange}
                />
                <label htmlFor="phn">Phone</label>
                <br />
              </div>
              <div>
                <h3>When...?</h3>
                <label className="label">
                  Appointment Date and Time:
                  <input
                    className="date_input"
                    type="datetime-local"
                    name="appointmentDateTime"
                    value={formData.appointmentDateTime}
                    onChange={handleFormDataChange}
                  />
                </label>
              </div>
            </>
          )}
          <div>
            <button className="cnfmBtn">Confirm Booking</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
