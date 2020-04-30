import React, { Component } from 'react'

import Post from '../components/blog/Post'

class Postpage extends Component<any, any> {

    render() {
        const { match } = this.props
        return (
            <div>
                <Post post={match.params.slug} />
            </div>
        )
    }
}

export default Postpage