import React, { useState, useEffect }  from 'react'
import './styles/App.css'
import Navbar  from './Components/Navbar'
import ListOfProblems from './Components/list of problems/ListOfProblems'
import Footer from './Components/Footer'
import FrequentQuestions from './Components/frequent questions/FrequentQuestions'

function App() {
  const [navRef, setNavRef] = useState("");

  useEffect(()=>{
  renderComponent()
  },[navRef])


  const renderComponent = () => {
    if (navRef === "Gia de problemas") {
      return <ListOfProblems />;
    } else if(navRef === "Preguntas Frecuentes") {
      return <FrequentQuestions />;
    }
  };

  return (
    <>
      <Navbar navRef={navRef} setNavRef={setNavRef}/>
      {renderComponent()}
      <Footer/>
    </>
  )
}

export default App
