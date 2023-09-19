import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Homepage } from "./Components/Homepage";
import { Cookies } from "react-cookie";

function App() {
  // const [accessToken, setAccessToken] = useState<String>("");
  // const headers = new Headers();
  // const access_token: string | null = headers.get("x-access-token");
  // setAccessToken(access_token);
  const cookies = new Cookies();
  console.log(cookies.get("access_token"));
  const [accessToken, setAccessToken] = useState<String>("");
  useEffect(() => {
    setAccessToken(cookies.get("access_token"));
    console.log(accessToken);
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
