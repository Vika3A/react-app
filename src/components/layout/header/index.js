import React, { Component } from 'react';
import Styles from './styles.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    shouldComponentUpdate () {
        return true;
    }

    render () {
        return (
            <header className = { Styles.header }>

                <NavLink
                    to = '/'>
                    <img
                        className = { Styles.logo } height = { '55px' }
                        src = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                        width = { '55px' }
                    />
                </NavLink>

                <div className = { Styles.menu }>
                    <NavLink
                        exact
                        activeClassName = { Styles.menu_item_active }
                        className = { Styles.menu_item }
                        to = '/'>Home</NavLink>

                    <NavLink
                        activeClassName = { Styles.menu_item_active }
                        className = { Styles.menu_item }
                        to = '/movie/top-rated'>Top Rated</NavLink>
                </div>

            </header>
        );
    }
}

export default Header;
