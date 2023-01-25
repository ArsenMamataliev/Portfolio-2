import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {navLinksItems} from "./../constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import logo from '../../../assets/logo/logo5.png'

export const BurgerNav = () => {

    let [open, setOpen] = useState(false);

    let openHandler = () => {
        setOpen(!open)
    };

    return (
        <div className={style.container}>
            <Link to="/" className={style.logo}>
             <img  src={logo} alt='logo' />
            </Link>
            <div onClick={openHandler} className={open === false ? style.openButton : style.closeButton}>
                <FontAwesomeIcon icon={faBars} className={style.icon}/>
            </div>
            <div className={open === true ? style.menu : style.closeButton}>
                <div onClick={openHandler} className={style.buttonToClose} >
                    <FontAwesomeIcon icon={faTimesCircle} className={style.iconClose}/>
                </div>
                {navLinksItems.map(item=>
                    <div key={item.title} className={style.linkContainer} >
                        <NavLink
                            className={({ isActive }) =>
                            isActive ? style.active : style.link
                            }
                            key={item.title}
                            to={item.link}
                            offset={0}
                            duration={500}
                            onClick={openHandler} 
                        >
                          {item.icon} {item.title}
                        </NavLink>
                    </div>)    
                }   
            </div>
        </div>
    )
}
