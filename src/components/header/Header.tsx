import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'

import { ReactComponent as HamburgerIcon} from './hamburger_icon.svg'

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <nav>
                    <Logo />
                    <ul role='menu'>
                        <li role='menuitem'><Link to='/'>Blog</Link></li>
                        <li role='menuitem'><Link to='/'>About</Link></li>
                        <li role='menuitem'><Link to='/'>Contact</Link></li>
                        <li role='menuitem'><ThemeSwitch /></li>
                        <li role='menuitem' className={styles.collapse}><HamburgerIcon /></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header