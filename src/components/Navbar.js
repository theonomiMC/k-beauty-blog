import React, { useContext, createRef, useEffect, useState } from 'react'
import { IconContext } from "react-icons";
import { FaBars } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { AppContext } from '../context'
import { NavHashLink } from 'react-router-hash-link'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const {wishlist } = useContext(AppContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuRef = createRef()
    const clickOutside = e => {
        if(menuRef.current && !menuRef.current.contains(e.target)){
            console.log(menuRef.current)
        setIsMenuOpen(false)
        }
    }
    
    useEffect(() => {
        document.addEventListener("click", clickOutside)
        return ()=>document.removeEventListener("click", clickOutside)
    })
    return <nav id="menu"
        className={`${!isMenuOpen ? "navbar" : "navbar responsive"}`}
        ref={menuRef}>

        <Link to="/">
            <img src="/images/main-logo.png" alt="main-logo"
                className="main-logo" />
        </Link>

        <div className='float-right'>
            {/* 1.--   best sellers */}
        <NavLink to="/products" exact activeClassName="active"
            className='rest'>best sellers</NavLink>
        {/* 2.-- 10-step-skincare */}
        <NavLink to="10-step-skincare" activeClassName="active"
            className='rest'>skincare routine</NavLink>
         {/*3.--   wishlist */}
         <NavLink to="/wishlist" activeClassName="active" className='rest' aria-label="wishlist">
            <IconContext.Provider value={{
                color: '#fd7e14', size: '30px'
            }} >
                <div aria-label="shopping card"><FiShoppingCart /></div>
            </IconContext.Provider>
            <div className='counter' aria-label="Wishlist item number">{wishlist.length}</div>
        </NavLink>
        {/* 4-5----   ABOUT / CONTACT HASH links */}
        <NavHashLink to="/#about"
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            activeClassName="active" className='rest'>About</NavHashLink>
        <NavHashLink
            to='/#contact'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            activeClassName="active" className='rest'>Contact
             </NavHashLink>
            </div>
        {/* click icon */}
        <button className="navbar-icon-wrapper">
            <span className='navbar-icon'><FaBars onClick={() => setIsMenuOpen(!isMenuOpen)}/></span>
        </button>

    </nav>

}
export default Navbar
