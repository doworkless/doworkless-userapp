import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import {BsCart2} from 'react-icons/bs'
import {FcSearch} from 'react-icons/fc'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <div className='navbarLeft'>
                <div className='navbarLogo'>
                    <Link className='Nav-text'>
                        <h2 className='name'>WorkLess</h2>
                        <h5>Make a business simple</h5>
                    </Link>
                </div>
                <div className='navbarSearch'>
                    <input type="text" className='search' placeholder='search your bussiness and more...' />
                    <div className='search-icon'><FcSearch/></div>
                </div>
                <div className='login'><Link className='text-login'>Login</Link></div>
            </div>
            <div className='navbarRight'>
                <BsCart2/>
                cart
            </div>
            
        </nav>
    );
}

