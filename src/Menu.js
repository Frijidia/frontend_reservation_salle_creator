import {React} from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'

export const Menu = (props) => {
    return(
        <div className='Navbars'>
            <ul className='NavbarWrappers'>
                <li className='NavbarElement'>
                    <NavLink className='Link' to='/'>Home</NavLink>
                </li>
                <li className='NavbarElement'>
                    <NavLink className='Link' to='/about-us'>About Us</NavLink>
                </li>
                <li className='NavbarElement'>
                    <NavLink className='Link' to='/contact-us'>Contact Us</NavLink>
                </li>
                <li className='NavbarElement'>
                    <NavLink className='Link' to='/sign-in'>Sign In</NavLink>
                </li>
                <li className='Navbutton'>
                    <NavLink className='linkbtn' to='/sign-up'>Sign Up</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu