import React , {useState}from 'react'
import {NextUIProvider } from '@nextui-org/react'
import Routes from './routes/index'
function App() { 

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        
      };
    
    return (
        <NextUIProvider className={`${
            theme === 'light'
              ? 'bg-gradient-to-r from-[#a1a192] via-[#F5F5DC] to-[#a1a192]'
              : 'bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900'
          } transition duration-1000`}>
            <Routes changeTheme={toggleTheme} theme={theme}  />
        </NextUIProvider>
    )
    
    }

export default App
