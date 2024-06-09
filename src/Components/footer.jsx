import React from 'react';
import {Link} from 'react-scroll';
import '../Assets/Footer.css';
const Footer = () =>{
    return(
        <div className='Footer-Container'>
            <h3>Our company</h3>
            <ul className='footer-menu'>
                <li>
                <a href='/'>Home</a>
                </li>
                <li>
                <a href='/About'>About</a>
                </li>
                <li>
                <a href='/Contact'>Contact</a>
                </li>
        </ul>
        <div className='icon'><a href='https://www.linkedin.com/company/qualixsolutions'>{/*<FontAwesomeIcon icon="fa-brands fa-linkedin" />*/}</a></div>
        </div>
    );
}
export default Footer;