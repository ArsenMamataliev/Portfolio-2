import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {Skill} from './Skill/Skill';
import react from './../../assets/icons/reac.svg';
import redux from './../../assets/icons/redux.svg';
import js from './../../assets/icons/js.svg';
import ts from './../../assets/icons/ts.svg'
import html from './../../assets/icons/html.svg';
import css from './../../assets/icons/css.svg';
import git from './../../assets/icons/git.svg';
import material from './../../assets/icons/material_ui.svg';
import sass from './../../assets/icons/sass.svg';
import figma from './../../assets/icons/figma.svg';
import Fade from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';

export default function Skills(){

    const skillItems = [
    {title:'JS', icon:js},
    {title:'TS', icon:ts},
    {title:'HTML', icon:html},
    {title:'React', icon:react}, 
    {title:'Redux', icon:redux}, 
    {title:'CSS', icon:css},
    {title:'SASS', icon:sass},
    {title:'Material UI', icon:material},
    {title:'FIGMA' , icon:figma},
    {title:'Git', icon:git},
    ]

    return (
        <div>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Fade bottom>
                    <div className={style.skills}>
                        {skillItems.map(item=><Tilt className="Tilt" options={{max: 25}}><Skill title={item.title} img={item.icon}/></Tilt>)}
                        
                    </div>
                </Fade>
            </div>
        </div>
    )
}

