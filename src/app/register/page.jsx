"use client";
import apiServices from "@/Context/services";
import NavBar from "@/components/NavBar";
import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({});


  const date = Date.now();

  const dataRegister = {
    email: "user1@gmail.com",
    name: "New User 2",
    password: "P4ss123@",
    address: "new address",
    phone: "987654321",
    country: "New Country",
    city: "New City",
  };

  const userRegister = async () => {
    const result = await apiServices.userRegisterService(dataRegister);

    console.log(result);
    setData({ ...dataRegister, ...result });
  };
  return (
    <div>
      <NavBar />
      <h1>Register</h1>
      <pre>{JSON.stringify(dataRegister, null, 2)}</pre>

      <button onClick={userRegister}>Register</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Register;
