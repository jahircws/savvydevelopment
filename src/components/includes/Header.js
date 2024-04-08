"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdShoppingCart, MdLanguage, MdMenu, MdPerson, MdArrowDropDown } from "react-icons/md";
import Login from "../auth/Login";

const Header = () => {
    const [lform, setLetform] = useState(false);
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
      }, []);
    return (
        <>
        <header className="web-header Header d-sm-none d-md-block">
            <section className="Header-navMenu t-label-large t-label-large">
                <div className="top-header-content">
                    <div className="header-left">
                        <span>(877) 388-1997</span>
                        <div className="dropdown">
                            <button type="button" title="language-selector" className="LanguageSelector dropdown-toggle" data-bs-toggle="dropdown">
                                <MdLanguage className="icon__elem material-icons icon__base"/>
                                <div className="LanguageSelector-triggerText t-label-large" aria-hidden="true">English</div>
                                {/* <MdArrowDropDown className="icon__elem material-icons icon__base"/> */}
                            </button>
                            <ul className="LanguageSelector-options dropdown-menu">
                                <li className="LanguageSelector-option ActiveLanguage"><button aria-label="Set selected language to English">English</button></li>
                                <li className="LanguageSelector-option"><button aria-label="Set selected language to Español">Español</button></li><li className="LanguageSelector-option"><button aria-label="Set selected language to Français">Français</button></li>
                                <li className="LanguageSelector-option"><button aria-label="Set selected language to Português">Português</button></li>
                                <li className="LanguageSelector-option"><button aria-label="Set selected language to 中文">中文</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-right">
                        <Link href="/help">Help</Link>
                        <a aria-label="View shopping cart" href="/shoppingCart">
                            <MdShoppingCart  className="icon__elem material-icons icon__base"/>
                        </a>
                    </div>
                </div>
            </section>
            <section className="Header-main">
                <div className="Header-main_logoContainer">
                    <Link title="Go to Homepage" href="/"><img src="/savvy-logo.png" alt="SAVVY Members Club logo" className="Header-main_logo"/></Link>
                </div>
                <section className="MegaCatMenu">
                    <div className="MegaCatMenu-container" role="navigation" id="MainNavigation" tabIndex="-1">
                        {/* <button type="button" className="icon__btn_elem  MegaCatMenu-openDropdown" role="button" aria-label="Open category menu" aria-haspopup="menu" aria-expanded="false" aria-controls="CatMenu-content">
                            <MdMenu className="icon__elem material-icons icon__base" alt="menu icon"/>
                        </button> */}
                        <button className="MegaCatMenu-headingItem t-body-large" role="link" aria-label="Go to Travel">Travel</button>
                        <button className="MegaCatMenu-headingItem t-body-large" role="link" aria-label="Go to Parks &amp; Tickets">Parks &amp; Tickets</button>
                    </div>
                </section>
                <div className="Header-main_userCtrlContainer">
                    <div className="Header-userCtrl_noUser">
                        <span className="button__elem"><button type="button" onClick={()=>setLetform(true)} className="primary-outlined round medium primary-color"><span className="button__label">Sign In</span></button></span>
                    </div>
                </div>
            </section>
        </header>
        {lform && <Login setLetform={setLetform} lform={lform}/>}
        </>
    )
}

export default Header;