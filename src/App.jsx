import React , {useState}from 'react'
import {NextUIProvider } from '@nextui-org/react'
import Routes from './routes/index'
function App() { 

   
    
    return (
        <NextUIProvider >
            <Routes />
        </NextUIProvider>
    )
    
    }

export default App
