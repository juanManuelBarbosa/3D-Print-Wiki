import React from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import Logo from './Logo.jsx';

export default function Nav() {
  return (
    <Navbar className="bg-gradient-to-r from-[#4f3763] to-[#88629c] h-20 flex items-center px-4 md:px-8">
      
        <Logo />
        <p className="text-gray-300 text-xl">
          Calculadora de costos
        </p>
    </Navbar>
  );
}
