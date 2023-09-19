import React from "react";
import { Axios } from "axios";

export const GetQuotes = () => {
  Axios.post("/api/fetch/quotes").then((data) => {
    console.log(data);
  });
  return (
    <>
      <h1>Quotes</h1>
    </>
  );
};
