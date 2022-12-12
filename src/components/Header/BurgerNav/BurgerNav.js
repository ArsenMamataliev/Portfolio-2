import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {navLinksItems} from "./../constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export const BurgerNav = () => {

    let [open, setOpen] = useState(false);

    let openHandler = () => {
        setOpen(!open)
    };

    return (
        <div className={style.container}>
            <div onClick={openHandler} className={open === false ? style.openButton : style.closeButton}>
                <FontAwesomeIcon icon={faBars} className={style.icon}/>
            </div>
            <div className={open === true ? style.menu : style.closeButton}>
                <div onClick={openHandler} className={style.buttonToClose} >
                    <FontAwesomeIcon icon={faTimesCircle} className={style.iconClose}/>
                </div>
                {navLinksItems.map(item=>
                    <div key={item.title} className={style.linkContainer} >
                        <Link
                            key={item.title}
                            className={style.link}
                            to={item.link}
                            offset={0}
                            duration={500}
                            onClick={openHandler} 
                        >
                          {item.icon} {item.title}
                        </Link>
                    </div>)    
                }   
            </div>
        </div>
    )
}
