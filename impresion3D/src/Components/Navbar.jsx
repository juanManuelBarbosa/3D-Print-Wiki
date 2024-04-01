import React, { Children } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Logo from './Logo.jsx'
export default function Nav( {navRef , setNavRef}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

const changeNavValue = (value)=>{
  setNavRef(value)
}

  const menuItems = [
    "Gia de Problemas",
    "Preguntas Frecuentes",
    "Calculadora De Costos",
    "Sobre Nosotros",
   
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className="bg-fuchsia-900">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>

      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <Link  className="text-gray-300 text-sm" href="#"  onClick={() => changeNavValue("Gia de problemas")}>
            Gia de Problemas
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link href="#" aria-current="page" className="text-gray-300 text-sm" onClick={() => changeNavValue("Preguntas Frecuentes")} >
            Preguntas frecuentes
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-gray-300 text-sm" onClick={()=>{ changeNavValue('Calculadora De Costos')}}>
            Calculadora de costos
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-fuchsia-950 text-sm underline" href="#">
            Sobre Nosotros
          </Link>
        </NavbarItem>
      </NavbarContent>

      
      <NavbarMenu >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href="#"
              size="xl"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
