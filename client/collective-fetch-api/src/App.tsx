import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Homepage } from "./Components/Homepage";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [accessToken, setAccessToken] = useState<string>("");
  fetch("/api/fetch/cookie")
    .then((res) => {
      res.json();
    })
    .then((data: any) => {
      console.log(data);
      setAccessToken(data);
    });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={accessToken ? <Homepage /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
