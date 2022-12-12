import React from 'react';
import style from './Nav.module.scss';
import { navLinksItems } from "../constants"
import { Fade } from "react-awesome-reveal"
import { NavLink } from "react-router-dom"

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Fade top>
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
            </Fade>
        </div>
    )
}