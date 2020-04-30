import React, { Component } from 'react'

import Header from '../components/generics/Header'
import Post from '../components/blog/Post'
import Footer from '../components/generics/Footer'

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