import React from 'react';

import style from './Skill.module.scss';

export const Skill = (props) => {

    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={props.img} alt={'icon'} className={style.img}/>
            </div>
            <h3>{props.title}</h3>
        </div>
    )
}
