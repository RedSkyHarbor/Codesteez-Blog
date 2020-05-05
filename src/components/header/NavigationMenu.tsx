import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavigationMenu.module.scss'

import ThemeSwitch from './ThemeSwitch'
import { ReactComponent as HamburgerIcon} from './hamburger_icon.svg'


class NavigationMenu extends Component<{mobile_collapse?: boolean}, any> {
    constructor(props: any){
        super(props)
        this.state = {
            mobile_collapse: true,
        }
        this.toggleCollapse = this.toggleCollapse.bind(this)
    }

    toggleCollapse = () => {
        this.setState({ mobile_collapse: !this.state.mobile_collapse })
    }

    render() {
        console.log(this.state.mobile_collapse)
        return (
            <nav>
                <div className={styles.desktop}>
                    <ul role='menu'>
                        <li role='menuitem'><Link to='/'>Blog</Link></li>
                        <li role='menuitem'><Link to='/'>About</Link></li>
                        <li role='menuitem'><Link to='/'>Contact</Link></li>
                        <li role='menuitem'><ThemeSwitch /></li>
                    </ul>
                </div>

                <div className={styles.mobile}>
                    <ul className={this.state.mobile_collapse ? 'collapsed' : 'expanded'} role='menu'>
                        <li role='menuitem'><Link to='/'>Blog</Link></li>
                        <li role='menuitem'><Link to='/'>About</Link></li>
                        <li role='menuitem'><Link to='/'>Contact</Link></li>
                        <li role='menuitem'><ThemeSwitch /></li>
                    </ul>
                    <HamburgerIcon onClick={this.toggleCollapse} />
                </div>
            </nav>
        )
    }
}

export default NavigationMenu