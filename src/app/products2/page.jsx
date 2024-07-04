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
    console.log(result);
    setProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // Actualizar el número de ítems en el carrito desde localStorage
    const cart = JSON.parse(localStorage.getItem('products')) || [];
    setCartItemCount(cart.length);
  }, []);

  const addToCart = (product) => {
    // Obtener el carrito actual del localStorage o inicializarlo
    let cart = JSON.parse(localStorage.getItem('products')) || [];

    // // Verificar si el producto ya está en el carrito
    // const existingProduct = cart.find(item => item.id === product.id);

    // if (existingProduct) {
    //   // Incrementar la cantidad si el producto ya está en el carrito
    //   existingProduct.quantity += 1;
    // } else {
      // Agregar el producto al carrito con cantidad 1 si no está en el carrito
      cart.push(product.id);
    // }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('products', JSON.stringify(cart));

    // Actualizar el número de ítems en el carrito
    setCartItemCount(cart.length);

    // Mostrar una confirmación (opcional)
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
