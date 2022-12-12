import React from 'react';
import style from './MyWork.module.scss';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

export const MyWork = (props) => {
    return (
        <div className={style.preview} style={props.style}>
            <img src={props.imgLink} alt="avatar" />
                <div className={style.description}>
                    <h3 className={style.title}>{props.title}</h3>
                    <div className={style.stack}>
                        {props.text.map((stack)=>
                            <Tilt key={stack}>
                                <p className={style.text}>{stack}</p>
                            </Tilt>
                        )}
                    </div>
                    <div className={style.linkContainer}>
                        <Link to={`/projects/${props.link}`} className={style.link}>visit</Link>
                    </div>     
                </div>           
        </div>    
    )
}
