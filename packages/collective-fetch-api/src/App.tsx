import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Homepage } from "./Components/Home/Homepage";
import axios from "axios";
import { GetQuotes } from "./Components/GetQuotes";
import { Expenses } from "./Components/Expenses/Expenses";
import { Overview } from "./Components/Overview/Overview";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Positions } from "./Components/Positions/Positions";

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
          <Route path="/" element={<Homepage/>}>
            {/* <Route
              index
              element={accessToken?.length ? <Homepage /> : <GetQuotes />}
            /> */}
            <Route index element={<Overview />}
            />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/home" element={<Homepage />} /> */}
            <Route path="/portfolio" element= {<Portfolio/>} />
            <Route path="/positions" element= {<Positions/>} />
            <Route path="/expenses" element= {<Expenses/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
