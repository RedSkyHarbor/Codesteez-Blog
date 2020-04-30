import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul role='menu'>
                    <li role='menuitem'><Link to='/'>Codesteez</Link></li>
                    <li role='menuitem'><Link to='/'>About</Link></li>
                    <li role='menuitem' className='theme-switch'>Theme switcher</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header