import React, { Component } from 'react'
import butter from '../../butter-client'
import { Helmet } from 'react-helmet'
import styles from './Post.module.scss'

interface IProps {
    post: string;
}

interface IState {
    data: any;
}

class Post extends Component<IProps, IState> {
    state: IState = {
        data: {},
    }

    dateFormat = (date: string) => {
        let ymd: Array<string> = date.substring(0,10).split('-')
        let dateobj: Date = new Date(Number(ymd[0]), Number(ymd[1]), Number(ymd[2]))
        return `${dateobj.toLocaleString('default', { month: 'long' })} ${dateobj.getDate()}, ${dateobj.getFullYear()} `
    }

    async componentDidMount() {
        const resp = await butter.post.retrieve(this.props.post)
        this.setState(resp.data)
    }

    render() {
        const post = this.state.data
        console.log(post)

        return (
            <div className='content'>
                <Helmet>
                    <title>{post.seo_title}</title>
                    <meta name='description' content={post.meta_description} />
                    <meta name='og:image' content={post.featured_image} />
                </Helmet>
                <div className={styles.container}>
                    <p>Published on {this.dateFormat(String(post.published))}</p>
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
            </div>
        )
    }
}

export default Post