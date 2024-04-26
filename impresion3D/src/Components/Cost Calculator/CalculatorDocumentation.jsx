const CalculatorDocumentation = ({theme})=>{
    return (<>
       <div className="border p-5 flex flex-col gap-3 mx-auto w-auto text-fuchsia-950">
       <h2 className="text-3xl text-center m-3">¿Qué es y cómo funciona la calculadora de costos?</h2>
       
        <section className="flex flex-col gap-2 ">
        <p>La calculadora de costos es una herramienta esencial para cotizar impresiones en 3D de manera precisa. 
            Su funcionamiento se basa en la recopilación y análisis de datos proporcionados por el laminador, 
            permitiendo calcular el costo total de la impresión y determinar los porcentajes de ganancia y reinversión.</p>

            <p>Aquí te explicamos cómo funciona en detalle:</p>
        </section>
       
        
        <ul className="flex flex-col gap-3">
            <li>
                <p><span>●</span>Se toman en cuenta la duración de la impresión en horas y el costo energético por hora para calcular el gasto total de electricidad.</p>
            </li>
            <li>
            <p><span>●</span>Utilizando el costo de la bobina por kilo y la cantidad de gramos utilizados, se calcula el gasto de material empleado en la impresión. Esta información se puede obtener fácilmente del laminador una vez que se segmenta.</p>
        </li>

        <li>
            <p><span>●</span>Sumando los datos anteriores y cualquier gasto adicional, se obtiene el gasto básico de la pieza (Gasto Básico = Gasto Energético + Gasto de Material + Gastos Extra).</p>
        </li>

        <li>
            <p><span>●</span>El gasto básico se duplica para determinar el costo exacto de fabricación de la pieza. Este monto no solo cubre los costos directos de producción y posibles errores, sino que también contempla el desgaste de la maquinaria y deja un margen para el crecimiento del negocio.</p>
        </li>

        <li>
            <p><span>●</span>A partir del costo de fabricación, se calcula el precio final de la pieza según dos escenarios:</p>
            <ul>
                <li>
                    <p><span>1➜</span>Si la impresión no está pintada, el costo se duplica y se divide equitativamente entre las ganancias del fabricante y el fondo de reinversión.</p>
                </li>

                <li>
                    <p><span>2➜</span>Si la impresión está pintada, el costo se triplica, considerando los materiales adicionales utilizados en el posprocesado. Se asigna un porcentaje del costo total para las ganancias del fabricante y otro para la reinversión en el negocio.</p>
                </li>
            </ul>
        </li>

        </ul>


       </div>
       
    </>)
}
export default CalculatorDocumentation