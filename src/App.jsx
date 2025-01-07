import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)
  const resumeFile = "/Vikram_Sharma_Resume.docx"

  return (
    <>
      <Header headerText={"vikram rai sharma"}/>
      <NavBar activeLink={"/"}/>
      <div className='photos'>
        <figure className='photo'><img src="/home2.jpg"/></figure>
        <figure className='photo'><img src="/home1.png"/></figure>
        <figure className='photo'><img src="/home3.jpg"/></figure>        
      </div>
      <div className='impact'>
        <p>crafting digital experiences, engaging clients, and driving business growth</p>
        <a href="https://docs.google.com/document/d/1UQGi163Ycao5XbxuuK2BRp0LhEjyoVp_/edit?usp=sharing&ouid=103128135030545190082&rtpof=true&sd=true" download className='item-link'>download my resume</a>
      </div>
    </>
  )
}




export default App
