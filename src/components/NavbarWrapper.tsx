"use client"; // This ensures the component runs on the client side

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const NavbarWrapper = () => {
  const router = usePathname();

  if (router === '/login' || router === '/register') {
    return null; // Don't render Navbar on login or register pages
  }

  return <Navbar />;
};

export default NavbarWrapper;
