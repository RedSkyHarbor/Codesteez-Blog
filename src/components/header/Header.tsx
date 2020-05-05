import React, { Component } from 'react'
import styles from './Header.module.scss'

import Logo from './Logo'
import NavigationMenu from './NavigationMenu'

const Header = () =>{
    return (
        <header className={styles.header}>
            <Logo />
            <NavigationMenu />
        </header>
    )
}

export default Header