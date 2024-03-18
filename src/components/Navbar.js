import React from 'react';
import CustomLink from './CustomLink';

export default function Navbar() {
     return (
          <nav className="nav">
               <img src='/navbackground.png' alt='hi' style={{ width: '150px', height: '150px', marginRight: '5px' }}  />
               <img src='/logo.png' alt='hi' style={{ width: '150px', height: '150px', marginRight: '5px' }}/>
               <h2> Simple Bites</h2>
               <p>Flavor, Simplified</p>

               <ul>
                    <CustomLink to="/Home">Home</CustomLink>
                    <CustomLink to="/About">About</CustomLink>
                    <CustomLink to="/Recipes">Recipes</CustomLink>
                    <CustomLink to="/Contact">Contact</CustomLink>
                    <CustomLink to="/Login">
                         <img src="/login.png" alt="Login"  style={{ width: '35px', height: '40px', marginRight: '5px' }}/>
                               Login
                    </CustomLink>
               </ul>
          </nav>
     );
}



