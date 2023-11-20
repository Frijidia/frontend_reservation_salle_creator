import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { GiHamburgerMenu} from "react-icons/gi"
import {ImCross} from "react-icons/im"

export const Navbar = ({clicked, iscliked}) => {
  const handleClicked = () => {
      iscliked(!clicked);
  }
  return (
    <div className='Nav'>
      <ul className='NavbarWrapper'>
        <li className='NavLogo'>
          <Link className='Link' to='/'>EPITECH</Link>
        </li>
        <li className='NavElements'>
          <NavLink className='Link' to='/'>Acceuil</NavLink>
        </li>
        <li className='NavElements'>
          <NavLink className='Link' to='/reservation'>Reservation</NavLink>
        </li>
        <li className='NavElements'>
          <NavLink className='Link' to='/reserve'>Reserver</NavLink>
        </li>
        <li className='NavButton'>
          <NavLink className='linkbtn' to='/login'>Se connecter</NavLink>
        </li>
        <li className='NavElements'>
          <NavLink className='Link' to='/register'>S'inscrire</NavLink>
        </li>
      </ul>
      {!clicked? (<GiHamburgerMenu className='Icon' onClick={handleClicked}/>) :
      (<ImCross className='Icon' onClick={handleClicked}/>)}
    </div>
      );
};

export default Navbar;