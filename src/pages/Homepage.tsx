import React, { Component } from 'react'

import PostList from '../components/blog/PostList'

class Homepage extends Component {
    render() {
        return (
            <div>
                <PostList />
            </div>
        )
    }
}

export default Homepage