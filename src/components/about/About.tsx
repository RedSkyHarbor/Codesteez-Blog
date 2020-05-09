import React from 'react'
import styles from './About.module.scss'

// @ts-ignore
import { TwitterFollowButton, TwitterTimelineEmbed } from 'react-twitter-embed'

const About = () => {
    return (
        <div className='content'>
            <div className={styles.about_container}>
                <p>Code steez is maintained by Jesse B.</p>
                <p>Each post is written by Jesse B.</p>
                <p>Give Jesse B a follow if you could ever be so kind.</p>
            </div>
            <div className={styles.social_container}>
                <TwitterFollowButton screenName={'codingsteez'} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="codingsteez"
                    options={{height: 400}}
                    placeholder={<div />}
                />
            </div>
        </div>
    )
}

export default About