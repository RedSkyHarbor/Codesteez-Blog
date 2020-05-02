import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

import ThemeSwitch from './ThemeSwitch'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul role='menu'>
                    <li role='menuitem'><Link to='/'>Codesteez</Link></li>
                    <li role='menuitem'><Link to='/'>About</Link></li>
                </ul>
                <ThemeSwitch />
            </nav>
        </header>
    )
}

export default Header