import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul role='menu'>
                    <li role='menuitem'><Link className={styles.link} to='/'><Logo /></Link></li>
                    <li role='menuitem'><Link className={styles.link} to='/'>About</Link></li>
                    <li className={styles.middle_align} role='menuitem'><ThemeSwitch /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header