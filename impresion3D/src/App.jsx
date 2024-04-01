import React, { useState, useEffect }  from 'react'
import './styles/App.css'
import Navbar  from './Components/Navbar'
import ListOfProblems from './Components/list of problems/ListOfProblems'
import Footer from './Components/Footer'
import FrequentQuestions from './Components/frequent questions/FrequentQuestions'
import Header from './Components/Header'
import Calculator from './Components/Cost Calculator/Calculator'


function App() {

  const [navRef, setNavRef] = useState("Calculadora De Costos");
  const [componentToRender , setComponentToRender] = useState(null)

  const[ headerTittle, setHeaderTittle]  = useState('')
  const[headerText , setHeaderText] = useState('')

  useEffect(()=>{
    if (navRef === "Gia de problemas") {
        setComponentToRender(<ListOfProblems/>)
        setHeaderTittle("Gia de problemas")
        setHeaderText("En Majora Impresiones Creamos un recopliado de los problemas más comunes que se presentan al imprimir en 3D, estudiamos cada caso y les ofrecemos una guía con las posibles causas y soluciones. Todo esto ha sido posible gracias a nuestros técnicos pero no quita el hecho de que dia a dia sigan habiendo nuevos imprevistos, por esto tambien los invitamos a que nos envien su experiencia y conocimiento. Muchas gracias.")
      
    } else if(navRef === "Preguntas Frecuentes") {
      setComponentToRender(<FrequentQuestions/>)
      setHeaderTittle("Preguntas Frecuentes")
      setHeaderText("Recopliamos un conjunto de preguntas frecuentes que creemos que pueden surgir al empezar en el mundo de la impresion 3d o incluso antes de hacerlo , si tu pregunta no aparece en la lista no dudes en comunicarte con nosotros que intentaremos no solo solucionarla sino tambien la incluieremos aqui para que otras personas que tengan la misma duda puedan resolverla mas facil gracias a vos")
      
    } else if(navRef === "Calculadora De Costos"){
      setComponentToRender(<Calculator/>)
      setHeaderText(null)
      setHeaderTittle(null)
    }
  },[navRef])


  return (
    <>
      <Navbar navRef={navRef} setNavRef={setNavRef}/>
      <Header headerText={headerText} headerTittle={headerTittle}/>
      {componentToRender}
      <Footer/>
    </>
  )
}

export default App
