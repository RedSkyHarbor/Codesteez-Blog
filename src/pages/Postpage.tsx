import React, { Component } from 'react'

import Post from '../components/blog/Post'
import Header from '../components/generics/Header'

class Postpage extends Component<any, any> {

    render() {
        return (
            <div>
                <Header />
                <Post post={this.props.match.params.slug} />
            </div>
        )
    }
}

export default Postpage