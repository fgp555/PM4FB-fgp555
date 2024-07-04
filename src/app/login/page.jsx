"use client";

import apiServices from "@/Context/services";
import NavBar from "@/components/NavBar";
import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({});
  const dataLogin = {
    email: "user1@gmail.com",
    password: "P4ss123@",
  };
  const userLogin = async () => {
    const result = await apiServices.userLoginService(dataLogin);
    setData({ ...dataLogin, ...result });
  };

  return (
    <div>
      <NavBar />
      <h1>Login</h1>
      <pre>{JSON.stringify(dataLogin, null, 2)}</pre>

      <button onClick={userLogin}>Login</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Login;
