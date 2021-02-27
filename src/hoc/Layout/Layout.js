import React, {Component} from 'react'
import './Layout.scss'
import App from '../../App'

export default class Layout extends Component {
  render() {
    return (
      <div className={'Layout'}>
        <div></div>
        <main>
          <App/>
        </main>
      </div>
    )
  }
}