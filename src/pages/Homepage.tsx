import React, { Component } from 'react'

import Header from '../components/generics/Header'
import PostList from '../components/blog/PostList'
import Footer from '../components/generics/Footer'

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PostList />
                <Footer />
            </div>
        )
    }
}

export default Homepage