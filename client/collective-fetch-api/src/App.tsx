import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Homepage } from "./Components/Homepage/Homepage";
import { Positions } from "./Components/OpenPos/OpenPos";
import axios from "axios";

function App() {
  const [accessToken, setAccessToken] = useState<string>("");

  axios.get("/api/fetch/cookie").then((response) => {
    console.log(response?.data.access_token);
    setAccessToken(response?.data?.access_token);
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Positions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/portfolio" element={<Homepage />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/expenses" element={<Homepage />} />
            <Route path="/orders" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
