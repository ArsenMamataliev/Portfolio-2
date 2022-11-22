import React from 'react';
import style from './Nav.module.scss';
import { navLinksItems } from "../constants"

import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { Link as LinkTo } from "react-router-dom";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Fade top>
                { navLinksItems.map(item => 
                    <div className={style.linkContainer}>
                        <Link
                            activeClass={style.link}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <LinkTo className={style.linkTo} to={item.link}> 
                               {item.icon} {item.title}
                            </LinkTo>
                        </Link>
                    </div>)
                }
            </Fade>
        </div>
    )
}