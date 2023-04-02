import React from "react";

import { useLocation } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";

// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "10px",
};

export function TrainersCV() {
  const location = useLocation();
  const myData = location.state.info;
  const baseUrl = "http://localhost:5000/";
  const { link } = myData?.cvPDF;
  console.log(link);

  const handleClick = (optn) => {
    optn ==="accept"?

    console.log("clicked accept"):
    console.log("clicked reject!")
  };

  return (
    <>
      <div style={buttonContainerStyle}>
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() =>handleClick("reject")}
        >
          Reject
        </button>

        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() =>handleClick("accept")}
        >
          Accept
        </button>
      </div>

      <br />
      <br />
      <br />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        {/* // Your render function */}
        <Viewer fileUrl={baseUrl.concat(link)} />
      </Worker>
    </>
  );
}
