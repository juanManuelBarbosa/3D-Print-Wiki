import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import Question from './Questions.json'
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
const FrequentQuestions = ()=> {
  return <>
  <Navbar/>

   <Header headerBanner='https://i.ibb.co/T2BJ4ND/2.png'
    headerText="Recopliamos un conjunto de preguntas frecuentes que creemos que pueden surgir al empezar en el mundo de la impresion 3d o incluso antes de hacerlo , si tu pregunta no aparece en la lista no dudes en comunicarte con nosotros que intentaremos no solo solucionarla sino tambien la incluieremos aqui para que otras personas que tengan la misma duda puedan resolverla mas facil gracias a vos"
    />

    <Accordion  >
        {Question.map((quest , index)=>(
             <AccordionItem key={index} aria-label={quest.pregunta} title={quest.pregunta} className="text-tiny p-1 m-1">
             {quest.respuesta}
             </AccordionItem>

        ))}    
    </Accordion>

    <Footer/>
  </>
}

export default FrequentQuestions