"use client";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Obtener los datos de localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    // Convertir los IDs de productos a objetos
    const productsWithIds = storedProducts.map((id) => ({ id }));

    setProducts(productsWithIds);
    setToken(token);
    setUserId(userId);
  }, []);

  const clearProducts = () => {
    localStorage.removeItem("products");
    setProducts([]);
  };

  const orderData = {
    userId,
    products,
    token,
  };

  const postOrder = async () => {
    console.log(orderData);
    // Realizar la solicitud POST
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <NavBar />
      <h1>Card</h1>
      <button onClick={postOrder}>Checkout</button>
      <button onClick={clearProducts}>Clear products</button>
      <pre>{JSON.stringify(orderData, null, 2)}</pre>
    </div>
  );
};

export default Card;
