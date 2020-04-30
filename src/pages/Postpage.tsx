import React, { Component } from 'react'

import Post from '../components/blog/Post'

class Postpage extends Component<any, any> {

    render() {
        return (
            <div>
                <Post post={this.props.match.params.slug} />
            </div>
        )
    }
}

export default Postpage