import React, { useState , useEffect} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Card from './Card'
export default function ModalApp({titulo, imagen , soluciones}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>
        <Button onPress={onOpen} className=" h-auto m-3 p-0 bg-transparent  "  >
            <Card 
            titulo={titulo}  
            imagen={imagen} 
            className="card"
          / > 
        </Button>
    
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} >

        <ModalContent className="w-1/3 h-screen bg-gradient-to-r from-gray-200 to-gray-400 h-screen">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-md p-1 text-center">{titulo}</ModalHeader>
              <ModalBody className="items-center">
                <img src={imagen} alt={titulo} className="size-80 mx-auto my-auto rounded-lg border-3 border-slate-600" />
                <ul>
                  {soluciones.map((soluc, index)=>(
                    <li className="text-tiny text-start " key={index}>{`${index+1} - ${soluc}`}</li>
                  ))}
                </ul>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} className="mx-auto  border bg-gray-100 font-semibold ">
                  Close
                </Button>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
