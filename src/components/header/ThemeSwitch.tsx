import React, { Component } from 'react'
import styles from './ThemeSwitch.module.scss'


const Checkbox = (props: any) => (
  <>
    <input type='checkbox'{...props}/>
    <label></label>
  </>
)

class ThemeSwitch extends Component {
  state = { 
    checked: false,
  }

  isActive = () => this.state.checked

  toggle = (event: any) => {
    this.setState({ checked: event.target.checked})
  }

  render() {
    return (
      <div className={styles.slider}>
          <Checkbox onChange={this.toggle} />
          <style media={this.isActive() ? 'screen' : 'none'}>
            {`  
              html { filter: invert(100%); background: #fefefe; }  
              * { background-color: inherit }
              img:not([src*=".svg"]), video { filter: invert(100%) }
            `}
          </style>
      </div>
    )
  }
}

export default ThemeSwitch