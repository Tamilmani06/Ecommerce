import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png' 
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
 



const Navbar = () => {
  const[menu,setMenu]= useState('shop');
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="LOGO" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu('shop')}> <Link to ='/' style={{textDecoration:'none'}}>Shop</Link>{menu ==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu('mens')}> <Link to ='/mens' style={{textDecoration:'none'}}>Men</Link> {menu ==='mens'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu('womans')}><Link to ='/womans' style={{textDecoration:'none'}}>Womans</Link> {menu ==='womans'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu('Kids')}><Link to ='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu ==='Kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'>
          <button>Login</button>
          </Link>
          <Link to ='/login'><img src={cart_icon} alt="cart_icon" />
</Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
} 

export default Navbar 