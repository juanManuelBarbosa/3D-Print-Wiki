import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import Question from './Questions.json'
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
const FrequentQuestions = ({theme , changeTheme})=> {
  return <>
  <Navbar changeTheme={changeTheme} theme={theme}/>

   <Header headerBanner='https://i.ibb.co/T2BJ4ND/2.png'
    headerText="Recopliamos un conjunto de preguntas frecuentes que creemos que pueden surgir al empezar en el mundo de la impresion 3d o incluso antes de hacerlo , si tu pregunta no aparece en la lista no dudes en comunicarte con nosotros que intentaremos no solo solucionarla sino tambien la incluieremos aqui para que otras personas que tengan la misma duda puedan resolverla mas facil gracias a vos"
    
    theme={theme}/>


    <Accordion variant="bordered" className=''>
      {Question.map((quest, index) => (
        <AccordionItem
          key={index}
          aria-label={quest.pregunta}
          title={quest.pregunta}
          className={theme === 'light' ? 'text-sm text-center p-1 m-1 text-[#3d0b40]' : 'text-sm text-center  p-1 m-1 text-gray-300'}
          classNames={{ title: theme === 'light' ? 
          'text-2xl text-center text-fuchsia-950' : 
          'text-2xl text-center text-gray-400' }}
          
        >
          {quest.respuesta}
        </AccordionItem>
      ))}
    </Accordion>

    

    <Footer/>
  </>
}

export default FrequentQuestions