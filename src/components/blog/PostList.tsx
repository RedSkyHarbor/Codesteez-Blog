import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import butter from '../../butter-client'
import styles from './PostList.module.scss'

class PostList extends Component {
    state = {
        meta: {}, // Contains total number of posts and next/prev page if they exist
        data: []  // Contains Array of posts
    }

    dateFormat = (date: string) => {
        let ymd: Array<string> = date.substring(0,10).split('-')
        let dateobj: Date = new Date(Number(ymd[0]), Number(ymd[1]), Number(ymd[2]))
        return `${dateobj.toLocaleString('default', { month: 'long' })} ${dateobj.getDate()}, ${dateobj.getFullYear()} `
    }

    async componentDidMount() {    
        const resp = await butter.post.list({ page: 1, page_size: 10 })
        this.setState(resp.data)
    }

    render() {
        return (
            <div className='content'>
                {this.state.data.map((post: any, key) => {
                    let tagslist = [];
                    for (let i=0;i<post.tags.length;i++){
                        tagslist.push(post.tags[i].name)
                    }
                    return (
                        <div className={styles.container} key={key}>
                            <Link to={`/blog/posts/${post.slug}`} className={styles.title}>{post.title}</Link>
                            <p className={styles.summary}>{post.summary}</p>
                            <p className={styles.published}>Published on {this.dateFormat(post.published)}</p>
                            <span className={styles.tags}>Tags: </span>
                            <div className='inline'>{ tagslist.map((tag, index) => { return(<span className={styles.tag} key={index}>{tag}</span>) }) }</div>
                        </div>
                    )
                })}

                <br />
            </div>
        )
    }
}

export default PostList