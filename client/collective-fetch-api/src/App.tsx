import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Homepage } from "./Components/Homepage";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [cookie, setCookie] = useCookies(["access_token"]);
  return (
    <>
      <CookiesProvider>
        {console.log(cookie.access_token)}
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
}

export default App;
