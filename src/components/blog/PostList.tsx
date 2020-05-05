import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import butter from '../../butter-client'

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
        return (
            <div className='content'>
                {this.state.data.map((post: any, key) => {
                    return (
                        <div key={key}>
                            <Link to={`/blog/posts/${post.slug}`}>{post.title}</Link>
                        </div>
                    )
                })}

                <br />
            </div>
        )
    }
}

export default PostList