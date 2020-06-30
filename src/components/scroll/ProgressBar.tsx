import React, { Component } from 'react'
import styles from './ProgressBar.module.scss'


interface Props { 
    scroll: String;
}

interface State { }

class ProgressBar extends Component<Props, State> {
    render(){
        return(
            <div className={styles.sticky}>
                <div className={styles.scrollbar} style={{ width: `${this.props.scroll}` }}>
                </div>
            </div>
            
        )
    }
}

export default ProgressBar