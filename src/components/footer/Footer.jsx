import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>            
            <span>Created and maintained by Jesse Breuer.</span> <span>Source code released under the MIT license.</span> <span>Website and documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</span>
        </footer>
    )
}

export default Footer