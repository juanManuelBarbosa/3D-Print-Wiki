
//import Header from './Header'
import data from '../Problems.json'
import Modal from './Modal'
import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'
const ListOfProblems = ({changeTheme , theme})=>{
  
    return <>
    <Navbar changeTheme={changeTheme} theme={theme}/>

    <Header 
    headerBanner="https://i.ibb.co/P5v9Dw6/Banner-de-Linked-In-Trabajo-Sencillo-1.png" 
    headerText="En Majora Impresiones Creamos un recopliado de los problemas más comunes que se presentan al imprimir en 3D, estudiamos cada caso y les ofrecemos una guía con las posibles causas y soluciones. Todo esto ha sido posible gracias a nuestros técnicos pero no quita el hecho de que dia a dia sigan habiendo nuevos imprevistos, por esto tambien los invitamos a que nos envien su experiencia y conocimiento. Muchas gracias."
    theme={theme}
    />

    <div className='flex flex-wrap  justify-center w-5/6 mx-auto '> {/*aca se renderizan todas las tarjetas*/}
    {data.map((problem, index)=>( 
        <Modal titulo={problem.titulo} imagen={problem.imagen} soluciones={problem.soluciones} key={index}/>
    ))}
    </div>

    <Footer/>

    </>
}

export default ListOfProblems