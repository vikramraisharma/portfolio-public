import { useState } from 'react';
import "../App.css";

const Header = ({headerText}) => {
   return (
      <div className='header-wrap'>
         <h1 className='header-before'>{headerText}</h1>
         <h1 className='header-main'>{headerText}</h1>
         <h1 className='header-after'>{headerText}</h1>
      </div>
   )
}

export default Header;