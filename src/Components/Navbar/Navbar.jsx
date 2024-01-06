import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png' 
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { useRef } from 'react';
import nav_dropdown from "../Assets/nav_dropdown.png";
 



const Navbar = () => {

  const[menu,setMenu]= useState('shop');
  const{getTotalCartItems}= useContext(ShopContext);
  const MenuRef= useRef();

  const dropdown_toggle=(e)=>{
    MenuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="LOGO" />
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle}  src={nav_dropdown} alt="" />
        <ul ref={MenuRef} className="nav-menu">
            <li onClick={()=>setMenu('shop')}> <Link to ='/' style={{textDecoration:'none'}}>Shop</Link>{menu ==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu('mens')}> <Link to ='/mens' style={{textDecoration:'none'}}>Men</Link> {menu ==='mens'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu('womans')}><Link to ='/womans' style={{textDecoration:'none'}}>Womans</Link> {menu ==='womans'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu('Kids')}><Link to ='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu ==='Kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'>
          <button>Login</button>
          </Link>
          <Link to ='/cart'><img src={cart_icon} alt="cart_icon" />
</Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
} 

export default Navbar 