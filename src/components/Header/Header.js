import React from 'react';

import {Nav} from './Nav/Nav';
import {BurgerNav} from "./BurgerNav/BurgerNav";

export const Header = () => {
    return (
        <div>
            <Nav/>
            <BurgerNav/>
        </div>
    )
}
