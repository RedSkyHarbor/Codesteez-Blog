import React, { Component } from 'react'

import Header from '../components/header/Header'
import Post from '../components/blog/Post'
import Footer from '../components/footer/Footer'

class Postpage extends Component<any, any> {

    render() {
        return (
            <div>
                <Header />
                <Post post={this.props.match.params.slug} />
                <Footer />
            </div>
        )
    }
}

export default Postpage