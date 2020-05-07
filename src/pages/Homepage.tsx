import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header/Header'
import PostList from '../components/blog/PostList'
import Footer from '../components/footer/Footer'

const Homepage = () => {
    return (
        <div>
            <Helmet><title>Blog | Code Steez</title></Helmet>
            <Header />
            <PostList />
            <Footer />
        </div>
    )
}

export default Homepage