
//import Header from './Header'
import data from '../Problems.json'
import '../../styles/listCard.css'
import Modal from './Modal'
import Header from './Header'
const ListOfProblems = ()=>{
  
    return <>
    <Header/>
    <div className='ContainerCards  '>
    {data.map((problem, index)=>( 
        <Modal titulo={problem.titulo} imagen={problem.imagen} soluciones={problem.soluciones} key={index}/>
    ))}
    </div>
    </>
}

export default ListOfProblems