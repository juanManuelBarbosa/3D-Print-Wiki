import React , {useState, useEffect} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Header from '../Header'
import Calculator from './Calculator'
import CalculatorInfo from './CalculatorInfo'




   

const CalculatorContainer= ({theme, changeTheme})=>{
    
    const [nombreDeLaPieza, setNombreDeLaPieza] = useState('');
    const [precioFilamento, setPrecioFilamento] = useState(0);
    const [gramosUtilizados, setGramosUtilizados] = useState(0);
    const [horasDeImpresion, setHorasDeImpresion] = useState(0);
    const [luzXHora, setLuzXHora] = useState(0);
    const [costoExtra, setCostoExtra] = useState(0);
    const [pintado, setPintado] = useState(false);
    const [gastoEnergetico, setGastoEnergetico] = useState(0);
    const [costoMaterial, setCostoMaterial] = useState(0);
    const [costoTotal, setCostoTotal] = useState(0);
    

    
    useEffect(() => {
        let actualizacionGastoEnergetico = horasDeImpresion * luzXHora 
        setGastoEnergetico(actualizacionGastoEnergetico);
        let actualizacionCostoMaterial = (gramosUtilizados * precioFilamento) / 1000;
        setCostoMaterial(actualizacionCostoMaterial)
        let base = (actualizacionCostoMaterial + actualizacionGastoEnergetico + costoExtra) * 2
        setCostoTotal(pintado ? base * 3 : base * 2);
    }, [horasDeImpresion, luzXHora, gramosUtilizados, precioFilamento, costoExtra, pintado]);

    //valida que esten todos los datos para asignarlos 
      function processData (ValoresInputs){
        if(ValoresInputs.length === 7){
            asingValues(ValoresInputs)
        }else{
            console.log('hubo un errror ')  // <<< aca se va a manejar proximamente los errores de la calculadora 
            }
    }


    //una vez recopilados y validados  todos los valores se almacenan en variables individuales
    async function asingValues  (ValoresInputs){ 
        setNombreDeLaPieza(ValoresInputs[0]);
        setPrecioFilamento(parseInt(ValoresInputs[1]));  
        setGramosUtilizados(parseInt(ValoresInputs[2])); 
        setHorasDeImpresion(  parseInt(ValoresInputs[3]) ); 
        setLuzXHora(parseInt(ValoresInputs[4]) );
        setCostoExtra(parseInt(ValoresInputs[5])); 
        setPintado(ValoresInputs[6]);
}



const handleButtonClick = (e)=> {
    e.preventDefault(); 
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
        input.value === '' ? input.focus() :  ValoresInputs.push(input.value)
    }
    });

    processData(ValoresInputs)  //funcion que procesa los valores de los input
}

    return <> 
        <Navbar theme={theme} changeTheme={changeTheme}/>

            <Header headerBanner='https://i.ibb.co/FJPNgFC/Banner-de-Linked-In-Trabajo-Sencillo-3.png' 
            headerText="Herramienta que sirve para establecer un precio adecuado que podes usar de referencia para tus piezas que tiene en cuenta diversos factores como el gasto energetico, el costo de los materiales desgaste de la maquina y mas!  "
            theme={theme}
            /> 

        <div className='flex gap-2 flex-col md:flex-row'>
            <section  className={theme === 'light' ? 
                ' basis-1/2 p-5 m-4 border border-fuchsia-950 border-3 rounded-lg bg-slate-950/40 sm:basis-[70%] ' 
                :' basis-1/2 p-5 m-4 border border-gray-400 border-3 rounded-lg bg-slate-500/40 sm:basis-[70%]' }>
                    <Calculator
                    theme={theme}
                    handleButtonClick={handleButtonClick}/>        
            </section>
                <section className={theme === 'light' ? 
                'basis-1/2 p-5 m-4 border border-fuchsia-950 border-3 rounded-lg bg-slate-950/40 sm:basis-[70%]' 
                :' basis-1/2 p-5 m-4 border border-gray-400 border-3 rounded-lg bg-slate-500/40 sm:basis-[70%]' }>

                    <CalculatorInfo 
                    NombreDeLaPieza={nombreDeLaPieza} 
                    costoMaterial={costoMaterial}
                    gastoEnergetico={gastoEnergetico}
                    costoTotal={costoTotal}
                    />
                </section>
           </div> 

           

        <Footer/>
     </>
}

export default CalculatorContainer;