import React , {useState}from 'react'
import {NextUIProvider } from '@nextui-org/react'
import Routes from './routes/index'
function App() { 

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        console.log('cambio')
      };
    
    return (
        <NextUIProvider className={theme === 'light' ? 'bg-white' : 'bg-black'} >
            <Routes changeTheme={toggleTheme}  />
        </NextUIProvider>
    )
    
    }

export default App
