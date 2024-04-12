import {Input} from '@nextui-org/react'

import Navbar from '../Navbar'
import Footer from '../Footer'
import Header from '../Header'


const Calculator = ()=>{
    return <> 
        <Navbar/>
            <Header headerBanner='https://i.ibb.co/sqS6j03/3.png'   headerText="pequeña calculadora que sirve para establecer un precio adecuado que podes usar de referencia para tus piezas que tiene en cuenta diversos factores como el gasto energetico, el costo de los materiales entre otras cosas "/>
           <div className='flex gap-2'>
                <section className='basis-1/2'>
                    <form action="" className='flex flex-wrap  gap-2 justify-center border '>
                    <Input type="email" label="Email" size="md" className='w-56' color="black"  />
                    <Input type="email" label="Email" size="md" className='w-56'  />
                    <Input type="email" label="Email" size="md" className='w-56'  />
                    <Input type="email" label="Email" size="md" className='w-56'  />
                    <Input type="email" label="Email" size="md" className='w-56'  />
                    <Input type="email" label="Email" size="md" className='w-56'  />
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