import React from "react";
import axios from "axios";

export const GetQuotes = () => {
  axios.post("/api/fetch/quotes").then((data) => {
    console.log(data);
  });
  return (
    <>
      <input
        type="text"
        style={{ textTransform: "uppercase" }}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <h1>Quotes</h1>
    </>
  );
};
