import { useState } from 'react'


function App() {
const [nombre , setnombre] = useState('');
const [apellido, setapellido] = useState('');
const [edad, setedad] = useState('')
const [tel, settel] = useState('')

const NameHandlechange = (e) => {
  setnombre(e.target.value)
}



  return (
    <>
      <input 
      type="text" 
      value={nombre} 
      placeholder="Text" 
      aria-label="Text"
      onChange={NameHandlechange}/>

      <input 
      type="email"
      name="email" 
      placeholder="Email" 
      aria-label="Email" 
      autocomplete="email"/>

      <input 
      type="number" 
      name="number" 
      placeholder="Number" 
      aria-label="Number"/> 

      <input type="password" 
      name="password" 
      placeholder="Password" 
      aria-label="Password"/>

      <input 
      type="tel" 
      name="tel" 
      placeholder="Tel" 
      aria-label="Tel" 
      autocomplete="tel"/>
      
    
    </>
  )
}

export default App
