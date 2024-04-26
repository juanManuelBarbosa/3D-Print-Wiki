import React from "react"
const CalculatorInfo = ({NombreDeLaPieza, costoMaterial, gastoEnergetico , costoTotal })=>{
    let total = costoTotal / 2
   return (<>
            <div className="flex flex-col items-around text-gray-200 h-full justify-around text-xl">
                <div className="flex justify-between   ">
                    <p>Nombre de la impresion:</p>
                    <p>{NombreDeLaPieza}</p>
                </div>

                <div className="flex justify-between">
                    <p>Costo de Material utilizado:</p>
                    <p>{`$${costoMaterial}`}</p>
                </div>
                
                <div className="flex justify-between">
                    <p>Gasto energetico:</p>
                    <p>{`$${gastoEnergetico}`}</p>
                </div>

                
                <div className="flex justify-between">
                    <p>Porcentaje Reinvercion </p>
                    <p>{`$${total}`}</p>
                </div>
            
                <div className="flex justify-between">
                    <p>Ganancia neta</p>
                    <p>{`$${total}`}</p>
                </div>
                
                <div className="flex justify-between">
                    <p>Precio total de la pieza</p>
                    <p>{`$${costoTotal}`}</p>
                </div>
                
                <button className="w-52 border-black-2 border-black border-2 p-2 rounded-md bg-fuchsia-900 text-gray-200 shadow mx-auto text-sm">Añadir a planilla</button>
            </div>
           
          </>
    

   ) 
}

export default CalculatorInfo