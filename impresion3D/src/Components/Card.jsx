import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function App(props) {
  return (
    <Card className=" p-5 m-2 items-center flex-col " >
      <CardHeader className="pb-0 pt-2  flex-col items-center">
        <p className="text-tiny uppercase font-bold">Tipo de error</p>
        
        <h4 className="font-bold text-center text-large text-wrap w-40 ">{props.titulo}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2" >
        <Image
          alt="Card background"
          className="object-cover rounded-xl size-40"
          src={props.imagen}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
