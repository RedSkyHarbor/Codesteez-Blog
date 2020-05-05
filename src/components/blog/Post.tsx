import React, { Component } from 'react'
import butter from '../../butter-client'
import { Helmet } from 'react-helmet'


class Post extends Component {
    state = {
        data: {}
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
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
        )
    }
}

export default Post