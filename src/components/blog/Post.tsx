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

    async componentDidMount() {
        const resp = await butter.post.retrieve(this.props.post)
        this.setState(resp.data)
    }

    render() {
        const post = this.state.data

        return (
            <div className='content'>
                <Helmet>
                    <title>{post.seo_title}</title>
                    <meta name='description' content={post.meta_description} />
                    <meta name='og:image' content={post.featured_image} />
                </Helmet>
                <div className={styles.container}>
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
            </div>
        )
    }
}

export default Post