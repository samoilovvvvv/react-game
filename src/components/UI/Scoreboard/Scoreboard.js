import React from 'react'
import './Scoreboard.scss'

const Scoreboard = props => {
  return (
    <div className={'Scoreboard'}>
      <p className={'ghostNumbers'}>888</p>
      <div>{props.value}</div>
    </div>
  )
}

export default Scoreboard