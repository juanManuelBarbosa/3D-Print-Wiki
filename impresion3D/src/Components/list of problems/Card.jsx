import React from "react";
import {Card, CardFooter, Image} from "@nextui-org/react";

export default function App(props) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="p-0.5 bg-slate-800  shadow-md"
    >
      <Image
        alt={props.titulo}
        className="object-cover  size-48  "  
        src={props.imagen}  
      />
      <CardFooter className="justify-center bg-gradient-to-r from-fuchsia-950 to-fuchsia-700 before:bg-white/100  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
        <p className="text-tiny text-white/80 ">{props.titulo}</p>
      </CardFooter>
    </Card>

  );
}
