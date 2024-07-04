import Link from "next/link";
import React from "react";

const NavBar = ({ cartItemCount }) => {
  // Si cartItemCount es undefined, se obtiene la cantidad desde localStorage
  const itemCount = cartItemCount !== undefined ? cartItemCount : JSON.parse(localStorage.getItem("products"))?.length || 0;
  return (
    <div className="NavBar">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/login">login</Link>
        <Link href="/register">register</Link>
        <Link href="/products">products</Link>
        <Link href="/card">card({itemCount})</Link>
        <Link href="/order">order</Link>
        <Link href="/logout">logout</Link>
      </nav>
    </div>
  );
};

export default NavBar;
