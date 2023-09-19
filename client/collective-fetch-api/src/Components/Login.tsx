import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Login = () => {
  const [redirectUrl, setRedirectUrl] = useState("");

  const fetchAuthCodeUrlFromBackend = () => {
    fetch("/api/auth")
      .then((res) => res.json())
      .then((data) => {
        setRedirectUrl(data.url);
      });
  };

  useEffect(() => {
    fetchAuthCodeUrlFromBackend();
  }, []);
  return (
    <>
      <h1>Login with FYERS</h1>
      <Link to={redirectUrl}>Login with FYERS</Link>
    </>
  );
};
