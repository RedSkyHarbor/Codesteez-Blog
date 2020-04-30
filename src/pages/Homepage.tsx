import React, { Component } from 'react'

import Header from '../components/generics/Header'
import PostList from '../components/blog/PostList'

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PostList />
            </div>
        )
    }
}

export default Homepage