import React from 'react';
import style from './MyWork.module.scss';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

export const MyWork = (props) => {
    return (
        <div className={style.preview} style={props.style}>
            <Link to={`/projects/${props.link}`}>
                <img src={props.imgLink} alt="avatar" />
            </Link>    
            <div className={style.description}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.stack}>
                  {
                    props.stack.map((item, index) =>
                        <Tilt key={index}>
                            <p className={style.text}>{item}</p>
                        </Tilt>
                    )
                  }
                </div>
                <div className={style.linkContainer}>
                    <Link to={`/projects/${props.link}`} className={style.link}>Demo</Link>
                </div>     
            </div>           
        </div>    
    )
}
