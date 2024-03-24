import { useState , useEffect } from 'react'
import Header from './Header'
import Card from './Card'
import data from './Problems.json'

const ListOfProblems = ()=>{
    const [ProblemsData, setProblemsData] = useState([])

    useEffect(()=>{
    setProblemsData(Object.values(data))   
    },[])

    return <>
    <Header/>
    <div className='ContainerCards'>
    {ProblemsData.map((problem, index)=>(
    <Card 
    key={index} 
    titulo={problem.titulo} 
    soluciones={problem.soluciones}
    imagen={problem.imagen}  />
    
    ))}
    </div>
    </>
}

export default ListOfProblems