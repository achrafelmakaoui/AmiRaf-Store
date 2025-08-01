import React, { useState } from 'react'
import './NavBar.css'
import LogoBlack from '../Images/AmiRaf_Black.webp'
import LogoWhite from '../Images/AmiRaf_Light.webp'
import { useTheme } from '../../ThemeContext';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import Badge from '@mui/material/Badge';
import { useCart } from '../../CartContext';

const Navbar = ({ userId }) => {
    const {theme, toggleTheme } = useTheme();
    const [activeMenu, setActiveMenu ] = useState(false);
    const { cartCount } = useCart();

    const handleOpenMenu = () => {
        setActiveMenu(true);
    };
    const handleCloseMenu = () => {
      setActiveMenu(false);
    };
  
    const handelMoonClick = () => {
        if (theme === 'light') {
          toggleTheme();
        }
    }
  
    const handelSunClick = () => {
        if (theme === 'dark') {
          toggleTheme();
        }
    }
    const handleImageClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };
  return (
    <>
        <nav>
            <div className="navLinks">
                <ul>
                    <li><Link to='/' aria-label="Go to Home section">Accueil</Link></li>
                    <li><Link to='/Produits'aria-label="View our Produit section">Produits</Link></li>
                    <li><Link to='/Contact' aria-label="Access the Contact section">Contactez nous</Link></li>
                </ul>
            </div>
            <div className="navLogo">
                {theme==='light' &&
                <>
                    <Link to='/' onClick={handleImageClick}><img src={LogoBlack} alt="text" loading="lazy" title="AmiRaf Logo"/></Link>
                </>
                }
                {theme==='dark' &&
                <>
                    <Link to='/' onClick={handleImageClick}><img src={LogoWhite} alt="text" loading="lazy" title="AmiRaf Logo"/></Link>
                </>
                }
            </div>
            <div className='darkmode_toggele'>
                {theme==='light' && 
                <>
                    <svg height="21" viewBox="0 0 1792 1792" width="21" fill='#2d2e32' onClick={handelMoonClick} id='darkmode-toggle'>
                    <path d="M1390 1303q-54 9-110 9-182 0-337-90t-245-245-90-337q0-192 104-357-201 60-328.5 229t-127.5 384q0 130 51 248.5t136.5 204 204 136.5 248.5 51q144 0 273.5-61.5t220.5-171.5zm203-85q-94 203-283.5 324.5t-413.5 121.5q-156 0-298-61t-245-164-164-245-61-298q0-153 57.5-292.5t156-241.5 235.5-164.5 290-68.5q44-2 61 39 18 41-15 72-86 78-131.5 181.5t-45.5 218.5q0 148 73 273t198 198 273 73q118 0 228-51 41-18 72 13 14 14 17.5 34t-4.5 38z"/>
                    </svg>
                </>
                }
                {theme==='dark' && 
                <>
                    <svg id='darkmode-toggle' stroke="#f5f5f5" fill="none"  height="21" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="21" onClick={handelSunClick}>
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" x2="12" y1="1" y2="3"/>
                    <line x1="12" x2="12" y1="21" y2="23"/>
                    <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/>
                    <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"/>
                    <line x1="1" x2="3" y1="12" y2="12"/>
                    <line x1="21" x2="23" y1="12" y2="12"/>
                    <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/>
                    <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"/>
                    </svg>
                </>
                }
                <svg id='openMenuSvg' onClick={handleOpenMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                <Link to='/cart' className='badge'>
                    <Badge badgeContent={cartCount} color="success" max={9} >
                        <CartButton color="action"/>
                    </Badge>
                </Link>
            </div>
        </nav>
        <div className={`mobileNav ${activeMenu ? '' : 'closed-menu'}`}>
            <span onClick={handleCloseMenu}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
            <ul>
            <li><Link href='/' onClick={handleCloseMenu} aria-label="Go to Home section">Accueil</Link></li>
            <li><Link to='/Produits' onClick={handleCloseMenu} aria-label="View our Services section">Produits</Link></li>
            <li><Link to='/Contact' onClick={handleCloseMenu} aria-label="Get in touch with us">Contactez nous</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar