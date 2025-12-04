

import './App.css'
import AuthPage from './pages/AuthPage'
import './index.css';
import { ThemeProvider } from './context/ThemeContext';


function App() {


  return (
    <>
   
     
    <ThemeProvider>
     <AuthPage />
     </ThemeProvider>

    
     
    </>
  )
}

export default App
