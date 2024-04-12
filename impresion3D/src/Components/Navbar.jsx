import React  from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {Link} from 'react-router-dom';
import Logo from './Logo.jsx'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch.jsx'


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

 


  const menuItems = [
    "Gia de Problemas",
    "Preguntas Frecuentes",
    "Calculadora De Costos",
    "Sobre Nosotros",
  ];

  return (
   
    
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-gradient-to-r from-[#3d0b40] to-fuchsia-800  h-20 flex" >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-slate-300"
        />
        <NavbarBrand  >
          <Logo  />
        </NavbarBrand>

      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 w-full "  justify="center">
        <NavbarItem className=" w-2/12 ">
          <Link to='/'>
              <p  className="text-gray-300 text-sm" >
                Gia de Problemas
              </p>
          </Link>
          
        </NavbarItem>

        <NavbarItem className=" w-2/12 " >
          <Link to='/preguntas-frecuentes'>
              <p  className="text-gray-300 text-sm" > Preguntas Frecuentes  </p>
          </Link>
        </NavbarItem>
        
        <NavbarItem className=" w-2/12 ">
            <Link to='/calculadora-costos'>
              <p  className="text-gray-300 text-sm" > Calculadora de costos  </p>
          </Link>
        </NavbarItem>

        <NavbarItem className=" w-2/12 ">
          <p className="text-slate-400 text-sm underline" >
            Sobre Nosotros
          </p>
        </NavbarItem>

      </NavbarContent>


      <NavbarContent >
          <ThemeSwitch/>  {/* boton para cambiar el tema claro oscuro pendiente.... */}
      </NavbarContent>


      <NavbarMenu  className="w-4/6 rounded-md shadow h-40">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <p
              color={"foreground"}
              href="#"
              size="xl"    
            >
              {item}
            </p>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

    
  );
}
