import {useState} from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const NavBar = () => {

   return (
      <div className='NavBar'>
         <div className='NavBarItem'>
            <Link to="/">home</Link>
         </div>
         <div className='NavBarBreak'>
            &nbsp;
         </div>
         <div className='NavBarItem'>
            <Link to="/showcase/create">creative showcase</Link>
         </div>
         <div className='NavBarBreak'>
            &nbsp;
         </div>
         <div className='NavBarItem'>
            <Link to="/showcase/code">dev showcase</Link>
         </div>
         <div className='NavBarBreak'>
            &nbsp;
         </div>
         <div className='NavBarItem'>
            <Link to="/contact">contact</Link>
         </div>
      </div>
   )

}

export default NavBar