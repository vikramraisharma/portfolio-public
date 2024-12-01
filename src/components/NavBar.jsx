import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";

const NavBar = ({activeLink}) => {
   console.log("active: " + activeLink)

   const routerLinks = [
      { path: "/", text: "home" },
      { path: "/experience", text: "experience" },
      { path: "/showcase/create", text: "creative showcase" },
      { path: "/showcase/code", text: "dev showcase" },
      { path: "/contact", text: "contact" },
   ];

   return (
      <div className='NavBar'>
         {routerLinks
            .filter(link => link.path !== activeLink)
            .map((link, index) => (
               <React.Fragment key={link.path}>
                  <div className='NavBarItem'>
                     <Link to={link.path}>{link.text}</Link>
                  </div>
                  {index < routerLinks.length - 2 && (
                     <div className='NavBarBreak'>
                        &nbsp;
                     </div>
                  )}
               </React.Fragment>
         ))}
      </div>
   )
}

export default NavBar;