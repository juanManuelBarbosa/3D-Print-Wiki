import React , {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Header from '../Header'
import InputCalculator from './InputCalculator'
import CalculatorInfo from './CalculatorInfo'
import {Select, SelectItem} from '@nextui-org/react'
import { FaArrowRight } from "react-icons/fa";

const Calculator = ({theme, changeTheme})=>{
    let precioDeBobina;
    let gramosUtilizados
    let horasDeImpresion;
    let luzXHora; 
    let costoExtra;
    let pintado;
    let gastoEnergetico; 

    const [nombreDeLaPieza, setNombreDeLaPieza] = useState('a');
    const [costoMaterial, setCostoMaterial] = useState('');
    const [gastoLuz, setGastoLuz] = useState('');
    
   
    
    //evento que recopila los inputs y su valor 
    const handleButtonClick = (e)=> {
        e.preventDefault(); 

        //manejo de los input para controlar que esten todos los datos 
        async function processData(ValoresInputs){
            if(ValoresInputs.length === 7){
                await asingValues(ValoresInputs)
                calcularValores()

            }else{
                console.log('hubo un errror ')  // <<< aca se va a manejar proximamente los errores de la calculadora 
            }
        }

        //recolecta todos los elementos y los almacena dentro de un array
        const inputs = document.querySelectorAll('input[type="text"], input[type="number"] ');
        const ValoresInputs = [];
        let focusSet = false //variable para evitar establecer el enfoque mas de una vez 

        //recorrida de array y validacion de formulario 
        inputs.forEach( (input)=>{
            if(input.value.trim() === ''){
                if(!focusSet){
                    input.focus()
                    focusSet = true;
                }     
            }else{
                input.value === '' ? input.focus :  ValoresInputs.push(input.value)
            }
        });
        processData(ValoresInputs)
}

//una vez recopilados y validados  todos los valores se almacenan en variables individuales
const asingValues = async(ValoresInputs) => { 
     setNombreDeLaPieza(ValoresInputs[0]);
     precioDeBobina = parseInt(ValoresInputs[1]);  
     gramosUtilizados = parseInt(ValoresInputs[2]); 
     horasDeImpresion = parseInt(ValoresInputs[3]); 
     luzXHora = parseInt(ValoresInputs[4]);
     costoExtra = parseInt(ValoresInputs[5]); 
     pintado = ValoresInputs[6];
}

const calcularValores = () =>{
    gastoEnergetico = horasDeImpresion * luzXHora;
    setCostoMaterial((gramosUtilizados * precioDeBobina) / 1000);
    costoBase = (gastoEnergetico + costoMaterial + costoExtra) * 2 ; 
    pintado ? costoTotal = costoBase * 2  : costoTotal = costoBase * 3 
}


    return <> 
        <Navbar theme={theme} changeTheme={changeTheme}/>
            <Header headerBanner='https://i.ibb.co/sqS6j03/3.png' 
              headerText="pequeña calculadora que sirve para establecer un precio adecuado que podes usar de referencia para tus piezas que tiene en cuenta diversos factores como el gasto energetico, el costo de los materiales entre otras cosas "
              theme={theme}
              />
           <div className='flex gap-2'>
                <section  className={theme === 'light' ? 
                    'basis-1/2 p-5 m-4 border border-fuchsia-950 border-3 rounded-lg bg-slate-950/40' 
                    :' basis-1/2 p-5 m-4 border border-gray-400 border-3 rounded-lg bg-slate-500/40' }>
                    <form action=""
                    className={theme === 'light' ? 
                    'flex flex-col items-center gap-2 justify-center  ' 
                    :'flex flex-col items-center gap-2 justify-center  ' }
                    >  
                        <InputCalculator label={"Nombre de la pieza"} id={"NombreDeLaPieza"} />
                    
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

                </section>

                <section className={theme === 'light' ? 
                    'basis-1/2 p-5 m-4 border border-fuchsia-950 border-3 rounded-lg bg-slate-950/40' 
                    :' basis-1/2 p-5 m-4 border border-gray-400 border-3 rounded-lg bg-slate-500/40' }>

                <CalculatorInfo NombreDeLaPieza={nombreDeLaPieza} />
                </section>

                

           </div>
           
           
        <Footer/>
     </>
}

export default Calculator;