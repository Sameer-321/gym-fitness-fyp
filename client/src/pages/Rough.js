import React, { useState } from "react";

export function Rough() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  console.log(daysDifference); // 5

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(startDate);
    console.log(endDate);
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={handleStartDateChange} />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
