import { FaArrowRight } from "react-icons/fa";
import InputCalculator from './InputCalculator';
import { Link } from 'react-router-dom';

const Calculator = ({ handleButtonClick }) => {
    return (
        <>
            <form
                action=""
                className="flex flex-col items-center gap-4 h-full justify-around"
            >
                {/* Precio Filamento por Kg */}
                <InputCalculator label={"Precio Filamento por Kg"} id={"PrecioFilamento"} />

                {/* Gramos Utilizados */}
                <InputCalculator label={"Gramos utilizados"} id={"GramosPieza"} />

                {/* Horas de Impresión */}
                <InputCalculator label={"Horas de Impresión"} id={"HorasDeImpresion"} />

                {/* Gasto de Luz y Enlace */}
                <div className='w-full flex justify-between items-center'>
                    <InputCalculator label={"Gasto de Luz por Hora"} id={"NombreDeLaPieza"} />
                    <FaArrowRight />
                    <Link to='/calculadora-Documentacion'>
                        <p className="text-gray-300 text-sm">¿Cómo se calcula?</p>
                    </Link>
                </div>

                {/* Botón Calcular */}
                <button
                    className="w-52 border-black-2 border-black border-2 p-2 rounded-md bg-fuchsia-900 text-gray-200 shadow mt-4"
                    onClick={handleButtonClick}
                >
                    Calcular
                </button>
            </form>
        </>
    );
}

export default Calculator;
