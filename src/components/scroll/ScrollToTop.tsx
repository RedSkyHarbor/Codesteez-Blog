import React, { Component } from 'react'
import styles from './ScrollToTop.module.scss'

interface State {
    is_visible: boolean;
}

interface Props { }

class ScrollToTop extends Component<Props, State> {
    state = {
        is_visible: false,
    }

    componentDidMount() {
        let scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    // Checks scroll position and updates state
    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }

    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div className={styles.scroll_to_top}>
                {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                        <svg className={styles.scroll_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
                    </div>
                )}
            </div>
        );
    }
}

export default ScrollToTop