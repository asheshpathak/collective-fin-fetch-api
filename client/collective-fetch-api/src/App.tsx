import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Homepage } from "./Components/Homepage";
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
          <Route path="/">
            <Route
              index
              element={accessToken?.length ? <Homepage /> : <Login />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
