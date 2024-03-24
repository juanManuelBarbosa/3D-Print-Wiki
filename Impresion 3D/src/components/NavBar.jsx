import Logo from './Logo'
import Menu from './Menu'
import './Styles/NavBar.css'
const NavBar = ()=>{
    return <>
    <div className='NavbarContainer'>
        <Logo/>
        <Menu/> 
    </div>
   
    </>
}

export default NavBar