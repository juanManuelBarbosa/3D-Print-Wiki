import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import Question from './Questions.json'
const FrequentQuestions = ()=> {
  return <>
    <Accordion>
        {Question.map((quest , index)=>(
             <AccordionItem key={index} aria-label={quest.pregunta} title={quest.pregunta}>
             {quest.respuesta}
             </AccordionItem>

        ))}
        
    </Accordion>
  
  </>





    
      
   
  ;
}

export default FrequentQuestions