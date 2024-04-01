
//import Header from './Header'
import data from '../Problems.json'
import '../../styles/listCard.css'
import Modal from './Modal'

const ListOfProblems = ()=>{
  
    return <>
   
    <div className='ContainerCards  '>
    {data.map((problem, index)=>( 
        <Modal titulo={problem.titulo} imagen={problem.imagen} soluciones={problem.soluciones} key={index}/>
    ))}
    </div>
    </>
}

export default ListOfProblems