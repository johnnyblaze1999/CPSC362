import React from 'react'
import Logo from '../assets/shopping-bag.png'
import {Link} from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSize'>
            <img src={Logo} alt='Logo'/>
        </div>
        <div className='rightSize'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button>
              <ReorderIcon/>
            </button>
        </div>
    </div>   
  )
}

export default Navbar