import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavigationMenu.module.scss'

import { ReactComponent as HamburgerIcon} from './hamburger_icon.svg'


interface state {
    isMobileUser: boolean;
}

interface props {}

class NavigationMenu extends Component<props, state> {
    constructor(props: any){
        super(props)
        this.state = {
            isMobileUser: true,
        }
        this.toggleCollapse = this.toggleCollapse.bind(this)
    }

    toggleCollapse = () => {
        this.setState({ isMobileUser: !this.state.isMobileUser })
    }

    render() {
        return (
            <nav>
                <div className={styles.desktop}>
                    <ul role='menu'>
                        <li role='menuitem'><NavLink exact to='/'>Blog</NavLink></li>
                        <li role='menuitem'><NavLink to='/about'>About</NavLink></li>
                        <li role='menuitem'><NavLink to='/contact'>Contact</NavLink></li>
                        <li></li>
                    </ul>
                </div>

                <div className={styles.mobile}>
                    <ul className={this.state.isMobileUser ? 'collapsed' : 'expanded'} role='menu'>
                        <li role='menuitem'><NavLink exact  to='/'>Blog</NavLink></li>
                        <li role='menuitem'><NavLink to='/about'>About</NavLink></li>
                        <li role='menuitem'><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                    <HamburgerIcon className={styles.hamburger} onClick={this.toggleCollapse} />
                </div>
            </nav>
        )
    }
}

export default NavigationMenu