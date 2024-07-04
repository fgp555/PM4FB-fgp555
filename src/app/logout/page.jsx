"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Limpiar el localStorage
    localStorage.removeItem("products");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Redirigir al usuario a la página de inicio
    router.push("/");
  }, [router]);

  return (
    <div>
      <NavBar />
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
