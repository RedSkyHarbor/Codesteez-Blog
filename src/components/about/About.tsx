import React from 'react'
import styles from './About.module.scss'

// @ts-ignore
import { TwitterFollowButton, TwitterTimelineEmbed } from 'react-twitter-embed'
import  ReactLoading from 'react-loading'

const About = () => {
    return (
            <div className={styles.about_container}>
                <p>Code steez is maintained by Jesse B.</p>
                <p>Each post is written by Jesse B.</p>
                <p>Give Jesse B a follow if you could ever be so kind.</p>
                <TwitterFollowButton 
                    screenName={'codingsteez'}
                    placeholder={<ReactLoading type='bars' color='orange'/>}
                />
            </div>
    )
}

export default About