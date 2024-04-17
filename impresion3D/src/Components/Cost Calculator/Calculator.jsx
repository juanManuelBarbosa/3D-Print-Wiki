import {Input ,Switch, cn} from '@nextui-org/react'

import Navbar from '../Navbar'
import Footer from '../Footer'
import Header from '../Header'


const Calculator = ({theme, changeTheme})=>{
    return <> 
        <Navbar theme={theme} changeTheme={changeTheme}/>
            <Header headerBanner='https://i.ibb.co/sqS6j03/3.png' 
              headerText="pequeña calculadora que sirve para establecer un precio adecuado que podes usar de referencia para tus piezas que tiene en cuenta diversos factores como el gasto energetico, el costo de los materiales entre otras cosas "
              theme={theme}
              />
           <div className='flex gap-2'>
                <section className='basis-1/2'>
                    <form action="" className='flex flex-col items-center gap-2 justify-center border '>
                    <Input type="number" label="Nombre de la pieza" size="md" className='w-56' color="black"  />
                    <Input type="number" label="Precio bobina (kg)" size="md" className='w-56'  />
                    <Input type="number" label="Gramos utilizados" size="md" className='w-56'  />
                    <Input type="number" label="Horas de impresion" size="md" className='w-56'  />
                    <Input type="number" label="Email" size="md" className='w-56'  /> <Input type="number" label="Email" size="md" className='w-56'  />

                    <Switch
                            color="secondary"
                            classNames={{
                                base: cn(
                                "inline-flex flex-row-reverse w-2/4 bg-content1 hover:bg-content2 items-center",
                                "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                                "data-[selected=true]:border-secondary",
                                ),
                                wrapper: "p-0 h-4 overflow-visible",
                                thumb: cn("w-6 h-6 border-2 shadow-lg",
                                "group-data-[hover=true]:border-secondary",
                                //selected
                                "group-data-[selected=true]:ml-6",
                                // pressed
                                "group-data-[pressed=true]:w-7",
                                "group-data-[selected]:group-data-[pressed]:ml-4",
                                ),
                            }}
                            >
                            <div className="flex flex-col gap-1">
                                <p className="text-medium">¿La pieza esta pintada?</p>
                                <p className="text-tiny text-default-400">
                                Estimado en relacion al tamaño de la pieza, usar como referencia 
                                </p>
                            </div>
                    </Switch>
                   
                   <button className='w-52 border-black-2 border-black border-2 p-2 rounded-md bg-fuchsia-900 text-gray-200 shadow'> Calcular </button>
                    </form> 
                </section>
                <section className='basis-1/2 border border-black'>
                    <h2>response</h2>
                    <p>Aca voy a crear una lista detallada con el precio el gasto energetico y todo lo necesario</p>
                </section>
           </div>
           
           
        <Footer/>
     </>
}

export default Calculator;