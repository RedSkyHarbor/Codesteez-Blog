import React, { Component } from 'react'

import Header from '../components/header/Header'
import PostList from '../components/blog/PostList'
import Footer from '../components/footer/Footer'

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