import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import {BsCart2}from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {FiLogIn} from 'react-icons/fi'
import {MdExpandMore} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import Sidebar from '../sidebar/Sidebar';


export default function Navbar(){
    const [dropDownDisplay, setDropDownDisplay] = useState('none')
    const [sidebarDisplay, setSidebarDisplay] = useState('translateX(0px)')
    const catMenu = useRef(null);
    const searchHandler = ()=>{
        setDropDownDisplay('flex');
    }
    const closeOpenMenus = (e)=>{
        if(catMenu.current && dropDownDisplay && !catMenu.current.contains(e.target)){
            setDropDownDisplay('none')
        }
    }
    document.addEventListener('mousedown',closeOpenMenus);
    const sidebarHandler = ()=>{
        console.log('hit');
        // setSidebarDisplay('translateX(0vw)');
    }
    return(
        <>
        <nav className='navbar'>
            <div className='navbarLeft'>
                <FiMenu className='navbarMenuIcon' onClick={sidebarHandler} />
                <div className='navbarLogo'>
                    <Link className='navbarLogoText'>
                        <span className='navbarLogoText1'>WorkLess</span>
                    </Link>
                    <span className='navbarLogoText2'>Make a bussiness simple</span>
                </div>
                <div className='navbarSearch'>
                    <input className='navbarSearchInput' placeholder='search your bussiness and more...' ref={catMenu} onClick={searchHandler}/>
                    <BiSearch className='navbarSearchIcon'/>
                    <div className='navbarSearchDropdown' style={{display:dropDownDisplay}}>
                        <div></div>
                        <div>Text</div>
                        <div>Nitish</div>
                        <div className='navbarSearchDropdownLine'><hr /></div>
                        <div className='navbarSearchDropdownTag'>Discover More</div>
                        <div>Education</div>
                        <div>Bussiness</div>
                    </div>
                </div>
                <BsCart2 className='navbarMobileCart'/>
                <div className='navbarLogin'>
                    <span className='navbarLoginText'>Login</span>
                    <FiLogIn className='navbarLoginIcon'/>
                    <div className="navbarLoginDropdown">
                        <div className='navbarLoginDropdownTop'>
                            <div className='navbarLoginDropdownTringle'></div>
                        </div>
                        <div className='navbarLoginDropdownBottom'>
                            <div className='navbarLoginDropdownCustomer'>
                                <div>New Customer?</div>
                                <div style={{color:'#0D99FF',fontWeight:'500'}}>Sign Up</div>
                            </div>
                            <hr />
                            <div>My Profile</div>
                            <hr />
                            <div>Orders</div>
                            <hr />
                            <div>Wishlist</div>
                            <hr />
                            <div>Rewards</div>
                        </div>
                    </div>
                </div>
                <div className='navbarMore'>
                    <span className='navbarMoreText'>More</span>
                    <MdExpandMore className='navbarMoreIcon'/>
                    <div className="navbarMoreDropdown">
                        <div className='navbarMoreDropdownTop'>
                            <div className='navbarMoreDropdownTringle'></div>
                        </div>
                        <div className='navbarMoreDropdownBottom'>
                            <div>Notification</div>
                            <hr />
                            <div>24x7 Customer Care </div>
                            <hr />
                            <div>Advertise</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbarRight'>
                <BsCart2 className='navbarRightIcon'/>
                <span className='navbarRightText'>Cart</span>
            </div>
        </nav>
        <div style={{transform:sidebarDisplay}} >
            <Sidebar/>
        </div>
        </>
    );
}

