import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/dashboard/dashboard'
function App() {
  const [count, setCouxnt] = useState(0)

  return (
    <>
    <Dashboard />
      
    </>
  )
}


export default App
