import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Header from '../components/header/Header'
import Post from '../components/blog/Post'
import Footer from '../components/footer/Footer'

type TParams = { slug : string };

const Postpage = ({ match }: RouteComponentProps<TParams> ) => {
    return (
        <div>
            <Header />
            <Post post={match.params.slug} />
            <Footer />
        </div>
    )
}

export default Postpage