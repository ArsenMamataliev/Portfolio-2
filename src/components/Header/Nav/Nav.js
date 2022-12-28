import React from 'react';
import style from './Nav.module.scss';
import { navLinksItems } from "../constants"
import { NavLink } from "react-router-dom"
import logo from '../../../assets/logo/logo.png'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <img  src={logo} alt='logo' />
            <div>
                { navLinksItems.map(item => 
                    <div className={style.linkContainer}>
                        <NavLink 
                            to={item.link}
                            className={({ isActive }) =>
                                isActive ? style.active : style.link
                            }
                        > 
                            {item.icon} {item.title}
                        </NavLink>
                    </div>
                    )
                }
            </div>
        </div>
    )
}