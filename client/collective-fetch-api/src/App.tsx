import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Homepage } from "./Components/Homepage";

function App() {
  const headers = new Headers();
  const access_token = headers.get("x-access-token");
  console.log(access_token);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={access_token ? <Homepage /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
