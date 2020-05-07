import React from 'react'
import styles from './About.module.scss'

// @ts-ignore
import { TwitterFollowButton } from 'react-twitter-embed'

const About = () => {
    return (
        <div className='content'>
            <div className={styles.about_container}>
                <h3>Code steez is maintained by Jesse <span role='image' aria-label='B'>🅱️</span>.</h3>
                <h3>Each post is written by Jesse <span role='image' aria-label='B'>🅱️</span>.</h3>
                <h3>Give Jesse <span role='image' aria-label='B'>🅱️</span> a follow.</h3>
            </div>
            <div className={styles.social_container}>
                <TwitterFollowButton screenName={'codingsteez'} />
            </div>
        </div>
    )
}

export default About