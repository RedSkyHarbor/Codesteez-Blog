import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './NotFound.module.scss'

const NotFound = () => {
    return ( 
        <div className={styles.not_found}>
            <h1 className={styles.oops}>Oops!</h1>
            <h2>This page wasn't found</h2>
            <NavLink to='/'>Let's go back home</NavLink>
        </div>

    )
}

export default NotFound