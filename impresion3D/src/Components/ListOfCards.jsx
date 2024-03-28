import { useState , useEffect } from 'react'
//import Header from './Header'
import Card from './Card'
import data from './Problems.json'
import '../styles/listCard.css'

const ListOfProblems = ()=>{
    const [ProblemsData, setProblemsData] = useState([])

    useEffect(()=>{
    setProblemsData(Object.values(data))   
    },[])

    return <>
    <div className='ContainerCards flex '>
    {ProblemsData.map((problem, index)=>(  
        
        <Card 
        key={index}
        titulo={problem.titulo} 
        soluciones={problem.soluciones} 
        imagen={problem.imagen} 
        className="card"
       / >
    
    ))}
    </div>
    </>
}

export default ListOfProblems