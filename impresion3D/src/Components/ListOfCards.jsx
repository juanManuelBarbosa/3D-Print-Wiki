import { useState , useEffect } from 'react'
//import Header from './Header'
import Card from './Card'
import data from './Problems.json'
import '../styles/listCard.css'
import Modal from './Modal'
const ListOfProblems = ()=>{
    const [ProblemsData, setProblemsData] = useState([])

    useEffect(()=>{
    setProblemsData(Object.values(data))   
    },[])

    return <>
    <div className='ContainerCards  '>
    
    {ProblemsData.map((problem, index)=>( 
       
        <Modal titulo={problem.titulo} imagen={problem.imagen} key={index}/>
        
    
    ))}
    </div>
    </>
}

export default ListOfProblems