"use client";
import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from "react";

const Order = () => {
  const [data, setData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const userGetOrders = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setIsLoggedIn(false);
      return;
    }

    console.log(token);
    console.log(userId);

    try {
      const response = await fetch("http://localhost:3000/users/" + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response.json();
      console.log(res);
      setData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    userGetOrders();
  }, []);

  if (!isLoggedIn) {
    return (
      <div>
        <NavBar />
        <h1>Tienes que iniciar sesión</h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>Order</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Order;
