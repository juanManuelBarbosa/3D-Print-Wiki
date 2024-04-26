import {Select, SelectItem} from '@nextui-org/react'
import { FaArrowRight } from "react-icons/fa";
import InputCalculator from './InputCalculator';


const Calculator = ({theme, handleButtonClick})=>{
    return(<>
         <form action=""
                className={theme === 'light' ? 
                'flex flex-col items-center gap-2 justify-center' 
                :'flex flex-col items-center gap-2 justify-center' }
                >  
                    <InputCalculator label={"Nombre de la pieza"} id={"NombreDeLaPieza"}  />
                    
                    <InputCalculator label={"Precio Filamento por Kg"} id={"PrecioFilamento"} />
                    
                    <InputCalculator label={"Gramos utilizados"} id={"GramosPieza"} />
                    
                    <InputCalculator label={"Horas de Impresion"} id={"HorasDeImpresion"} />

                    <div className='w-full gap-3 flex justify-between items-center'>
                        <InputCalculator label={"Gasto de Luz por Hora"} id={"NombreDeLaPieza"} / >
                        <FaArrowRight />
                        <a className='p-1 text-center text-gray-200 rounded-md bg-fuchsia-950/90' href="">como se calcula?</a>
                    </div>

                    <InputCalculator label={"Costo Extra"} id={"CostoExtra"} />

                    <Select label='Pieza pintada?' className="max-w-xs"  >
                        <SelectItem key={true} value={true}>si</SelectItem>
                        <SelectItem key={false} value={false}>no</SelectItem>
                    </Select>  
                       
                    <button className='w-52 border-black-2 border-black border-2 p-2 rounded-md bg-fuchsia-900 text-gray-200 shadow' onClick={handleButtonClick}> Calcular </button>
                    </form> 
    
    </>)
}

export default Calculator