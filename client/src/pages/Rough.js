import React, { useState } from "react";

export function Rough() {
  const [date, setDate] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dateInput">Enter a date:</label>
      <input
        type="date"
        id="dateInput"
        name="dateInput"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  );
}
