import React, { useState } from "react";
import "../../styles/form.css";

function ContactUs() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    setContact({ ...contact, [name]: [value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    setTimeout(500);
    setContact({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Name</label>
      <input
        value={contact.name}
        type="string"
        name="name"
        onChange={handleChange}
      />{" "}
      <br />
      <label>Email</label>
      <input
        value={contact.email}
        type="email"
        name="email"
        onChange={handleChange}
      />
      <br />
      <label>Phone Number</label>
      <input
        value={contact.phoneNumber}
        type="integer"
        name="phoneNumber"
        onChange={handleChange}
      />
      <br />
      <label>Message</label>
      <input
        value={contact.message}
        type="string"
        name="message"
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactUs;
