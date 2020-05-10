import React from 'react'
import styles from './Footer.module.scss'

import Logo from '../logo/Logo'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Logo />
                <p>Code Steez - A high quality, in depth programming blog.</p>
            </div>
        </footer>
    )
}

export default Footer