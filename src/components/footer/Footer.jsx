import React from 'react'
import { TwitterFollowButton } from 'react-twitter-embed'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <TwitterFollowButton screenName={'CodingSteez'}/>
                <span>Created and maintained by Jesse Breuer.</span> <span>Source code released under the MIT license.</span> <span>Website and documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</span>
            </div>
        </footer>
    )
}

export default Footer