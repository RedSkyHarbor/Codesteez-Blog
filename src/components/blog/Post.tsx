import React, { Component } from 'react'
import butter from '../../butter-client'
import { Helmet } from 'react-helmet'
import styles from './Post.module.scss'

import ProgressBar from '../scroll/ProgressBar'

interface IProps {
    post: string;
}

interface IState {
    data: any;
    scrollPosition: Number;
}

class Post extends Component<IProps, IState> {
    state: IState = {
        data: {},
        scrollPosition: 0
    }

    listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
          requestAnimationFrame(() => {
            this.calculateScrollDistance();
          });
        });
    }
    
    calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by
        const winHeight = window.innerHeight;
        const docHeight = this.getDocHeight();

        const totalDocScrollLength = docHeight - winHeight;
        const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);

        this.setState({ 
            scrollPosition: scrollPosition,
        });
    }
    
    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    dateFormat = (date: string) => {
        let ymd: Array<string> = date.substring(0,10).split('-')
        let dateobj: Date = new Date(Number(ymd[0]), Number(ymd[1]), Number(ymd[2]))
        return `${dateobj.toLocaleString('default', { month: 'long' })} ${dateobj.getDate()}, ${dateobj.getFullYear()} `
    }

    async componentDidMount() {
        const resp = await butter.post.retrieve(this.props.post)
        this.setState(resp.data)
        this.listenToScrollEvent()
    }

    render() {
        const post = this.state.data
        return (
            <div>
                <Helmet>
                    <title>{post.seo_title}</title>
                    <meta name='description' content={post.meta_description} />
                    <meta name='og:image' content={post.featured_image} />
                </Helmet>
                <ProgressBar scroll={ this.state.scrollPosition + '%'} />
                <div className={styles.container}>
                    <p className={styles.published}>Published on {this.dateFormat(String(post.published))}</p>
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
            </div>
        )
    }
}

export default Post