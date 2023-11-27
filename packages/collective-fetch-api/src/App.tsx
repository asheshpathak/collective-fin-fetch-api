import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Homepage } from "./Components/Home/Homepage";
import axios from "axios";
import { GetQuotes } from "./Components/GetQuotes";

function App() {
  const [accessToken, setAccessToken] = useState<string>("sample access token");

  // axios.get("/api/fetch/cookie").then((response) => {
  //   if(response.data.length !== 0) {
  //     setAccessToken(response?.data?.access_token);
  //   }
  // });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route
              index
              element={accessToken?.length ? <Homepage /> : <GetQuotes />}
            /> */}
            <Route index element={<Homepage />}
            />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/home" element={<Homepage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
