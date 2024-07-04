"use client";
import apiServices from "@/Context/services";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const getProducts = async () => {
    const result = await apiServices.getProductsService();
    setProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("products")) || [];
    setCartItemCount(cart.length);
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("products")) || [];
    cart.push(product.id);
    localStorage.setItem("products", JSON.stringify(cart));
    setCartItemCount(cart.length);
    alert(`${product.name} ha sido añadido al carrito`);
  };

  return (
    <main>
      <NavBar cartItemCount={cartItemCount} />
      <h2>Home pages</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <Image src={product.imgUrl} alt={product.name} width={200} height={200} />
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </main>
  );
};

export default Products;
