import React from 'react';
import style from './Nav.module.scss';
import { navLinksItems } from "../constants"
import { Link, NavLink } from "react-router-dom"
import logo from '../../../assets/logo/logo5.png'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link to='/' className={style.logo}> 
                <img  src={logo} alt='logo' />
            </Link>
            <div>
                { navLinksItems.map(item => 
                    <div className={style.linkContainer}>
                        <NavLink
                            key={item.title}
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