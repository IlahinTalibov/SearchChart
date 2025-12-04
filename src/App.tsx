import { useState } from 'react'

import './App.css'
import AuthPage from './pages/AuthPage'
import './index.css';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     
    <ThemeProvider>
     <AuthPage />
     </ThemeProvider>

    
     
    </>
  )
}

export default App
