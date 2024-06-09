import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import '../Assets/Navbar.css';
const Navbar = ()=>{
    return(
        <nav className='navbar' >
        <div><a href='https://www.qualixsolutions.com/'><img width="75" height="33" src="https://www.qualixsolutions.com/wp-content/uploads/2023/08/QS_logo.png"  alt="Qualix Solutions" decoding="async"  sizes="(max-width: 75px) 100vw, 75px" /></a></div>
        <div>
            <ul className='Nav-name'>
                <li><h4>Qualix Solutions</h4></li>
                <li><p>Enabling the Digital future</p></li>
            </ul>
        </div>

        <ul>
          <div className="navbar-item"><li><a href="/" className="navbar-item">Home</a></li></div>
            <div className="navbar-item"><li><a href="/About" >About</a></li></div>
            <div className="navbar-item"><li><a href="/Contact" >Contact</a></li></div>
            
            
              
                    
              
        </ul>
      </nav>
    );
}
export default Navbar;