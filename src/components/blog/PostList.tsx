import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import butter from '../../butter-client'
import styles from './PostList.module.scss'

class PostList extends Component {
    state = {
        meta: {}, // Contains total number of posts and next/prev page if they exist
        data: []  // Contains Array of posts
    }

    async componentDidMount() {    
        const resp = await butter.post.list({ page: 1, page_size: 10 })
        this.setState(resp.data)
    }

    render() {
        console.log(this.state.data)
        return (
            <div className='content'>
                {this.state.data.map((post: any, key) => {
                    return (
                        <div className={styles.post_container} key={key}>
                            <Link to={`/blog/posts/${post.slug}`} className={styles.title}>{post.title}</Link>
                            <p className={styles.summary}>{post.summary}</p>
                            <p className={styles.published}>Published on {post.published}</p>
                        </div>
                    )
                })}

                <br />
            </div>
        )
    }
}

export default PostList