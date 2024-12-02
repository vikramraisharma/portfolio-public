import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";

const NavBar = ({activeLink}) => {
   console.log("active: " + activeLink)

   const routerLinks = [
      { path: "/", text: "home" },
      { path: "/experience", text: "experience" },
      { path: "/showcase/create", text: "designs" },
      { path: "/showcase/code", text: "code" },
      { path: "/contact", text: "contact" },
   ];

   return (
      <div className='NavBar'>
         {routerLinks.map((link, index) => (
            <React.Fragment key={link.path}>
               <div className={`NavBarItem ${link.path === activeLink ? 'activePage' : ''}`}>
                  <Link to={link.path}>{link.text}</Link>
               </div>
            </React.Fragment>
         ))}
      </div>
   )
}

export default NavBar;