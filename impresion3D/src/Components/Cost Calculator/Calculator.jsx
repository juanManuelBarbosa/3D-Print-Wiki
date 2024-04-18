import {motion} from 'framer-motion'

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
                    <form action=""
                    className={theme === 'light' ? 
                    'flex flex-col items-center gap-2 justify-center p-6 m-5 border border-fuchsia-950 border-3 rounded-lg bg-slate-950/40' 
                    :'flex flex-col items-center gap-2 justify-center p-6 m-5 border border-gray-400 border-3 rounded-lg bg-slate-500/40' }
                    >

                    
                    <motion.div
                    className='w-full rounded-xl'
                    whileHover={{ scale: 1.03 }}
                     transition={{ duration: 0.3 }}
                    >
                    <Input 
                    type="number" 
                    label="Nombre de la pieza"  
                    className='w-full'  
                    color='content' 
                    variant='faded'
                    classNames={{
                    label: "text-slate-200",
                    inputWrapper: "bg-fuchsia-950 border-1 border-slate-800 text-slate-200"} }  />
                    </motion.div> 
                    
                    <motion.div
                    className='w-full rounded-xl'
                    whileHover={{ scale: 1.03 }}
                     transition={{ duration: 0.3 }}
                    >
                    <Input 
                    type="number" 
                    label="Precio Bobina Kg"  
                    className='w-full'  
                    color='content' 
                    variant='faded'
                    classNames={{
                    label: "text-slate-200",
                    inputWrapper: "bg-fuchsia-950 border-1 border-slate-800 text-slate-200"} }  />
                    </motion.div> 
                    

                    <motion.div
                    className='w-full rounded-xl'
                    whileHover={{ scale: 1.03 }}
                     transition={{ duration: 0.3 }}
                    >
                    <Input 
                    type="number" 
                    label="Gramos utilizados"  
                    className='w-full'  
                    color='content' 
                    variant='faded'
                    classNames={{
                    label: "text-slate-200",
                    inputWrapper: "bg-fuchsia-950 border-1 border-slate-800 text-slate-200"} }  />
                    </motion.div>   
                    
                    <motion.div
                    className='w-full rounded-xl'
                    whileHover={{ scale: 1.03 }}
                     transition={{ duration: 0.3 }}>
                        <Input 
                        type="number" 
                        label="Horas de impresion"  
                        className='w-full ' 
                        color='content' 
                        variant='faded'
                        classNames={{
                        label: "text-slate-200",
                        inputWrapper: "bg-fuchsia-950 border-1 border-slate-800 text-slate-200"} }  />
                    </motion.div>

                    <motion.div
                    className='w-full rounded-xl'
                    whileHover={{ scale: 1.03 }}
                     transition={{ duration: 0.3 }}>
                        <Input 
                        type="number" 
                        label="Costo extra"  
                        className='w-full rounded-xl ' 
                        color='content' 
                        variant='faded'
                        classNames={{
                        label: "text-slate-200",
                        inputWrapper: "bg-fuchsia-950 border-1 border-slate-800 text-slate-200"} }  
                        /> 
                    </motion.div>

                    
                
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
                            }}>
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