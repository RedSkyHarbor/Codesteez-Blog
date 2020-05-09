import React from 'react'
import styles from './About.module.scss'

// @ts-ignore
import { TwitterFollowButton } from 'react-twitter-embed'

const About = () => {
    return (
        <div className='content'>
            <div className={styles.about_container}>
                <h3>Code steez is maintained by Jesse B.</h3>
                <h3>Each post is written by Jesse B.</h3>
                <h3>Give Jesse B a follow if you could ever be so kind.</h3>
            </div>
            <div className={styles.social_container}>
                <TwitterFollowButton screenName={'codingsteez'} />
            </div>
        </div>
    )
}

export default About