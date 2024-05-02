import React from "react";
import {Card, CardFooter, Image} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function App(props) {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.1 }}
    > 
        <Card
          isFooterBlurred
          radius="lg"
          className="p-0.5 bg-slate-800  shadow-md "
          
        >
          <Image
            
            alt={props.titulo}
            className="object-cover  size-56 shadow"  
            src={props.imagen}  
          
          />
          <CardFooter className="justify-center bg-gradient-to-r from-fuchsia-950 to-fuchsia-700 before:bg-white/100  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
            <p className="text-tiny text-white/80 ">{props.titulo}</p>
          </CardFooter>
        </Card>
    </motion.div>
  );
}
