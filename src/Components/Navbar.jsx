import React  from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {Link} from 'react-router-dom';
import Logo from './Logo.jsx'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch.jsx'


export default function Nav({changeTheme}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  

  return (
   
    
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-gradient-to-r from-[#3d0b40] to-fuchsia-800  h-20 flex   justify-center" >
      <NavbarContent  >
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

      </NavbarContent>
      
      <NavbarContent >
          <ThemeSwitch changeTheme={changeTheme}/>  {/* boton para cambiar el tema claro oscuro pendiente.... */}
      </NavbarContent>


      <NavbarMenu  className="w-4/6 rounded-md shadow h-40 pt-20 flex gap-10  ">
        
          <NavbarMenuItem className="text-3xl">
            <p color={"foreground"} href="#" >
              <a href="/">Guia de Problemas</a>
            </p>
          </NavbarMenuItem>

          <NavbarMenuItem className="text-3xl">
            <p color={"foreground"} href="#" size="xl">
              <a href="/preguntas-frecuentes">Preguntas Frecuentes</a>
            </p>
          </NavbarMenuItem>

          <NavbarMenuItem className="text-3xl">
            <p color={"foreground"} href="#" size="xl">
              <a href="/calculadora-costos">Calculadora de costos </a>
            </p>
          </NavbarMenuItem>
        
      </NavbarMenu>
    </Navbar>

    
  );
}
