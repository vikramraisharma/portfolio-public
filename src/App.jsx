import { useState } from 'react'
import './App.css'

import NavBar from './components/navBar';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header headerText={"vikram rai sharma"}/>
      <NavBar activeLink={"/"}/>
      <div className='photos'>
        <figure className='photo'>&nbsp;</figure>
        <figure className='photo'>&nbsp;</figure>
        <figure className='photo'>&nbsp;</figure>        
      </div>
      <div className='impact'>
        <p>crafting digital experiences, engaging clients, and driving business growth</p>
      </div>
    </>
  )
}




export default App
