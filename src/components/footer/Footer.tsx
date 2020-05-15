import React from 'react'
import styles from './Footer.module.scss'

import { ReactComponent as GithubLogo } from './github_logo.svg'
import { ReactComponent as TwitterLogo } from './twitter_logo.svg'

import Logo from '../logo/Logo'
import ScrollToTop from '../scroll/ScrollToTop'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ScrollToTop />
            <Logo />
            <p>Code Steez - A high quality, in depth programming blog.</p>
            <div className={styles.social_links}>
                <a rel="noopener noreferrer" target="_blank" href='https://github.com/RedSkyHarbor'><GithubLogo className={styles.github_logo} /></a>
                <a rel="noopener noreferrer" target="_blank" href='https://twitter.com/CodingSteez'><TwitterLogo className={styles.twitter_logo} /></a>
            </div>
        </footer>
    )
}

export default Footer