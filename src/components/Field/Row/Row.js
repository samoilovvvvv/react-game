import React from 'react'
import Element from './Element/Element'

const Row = props => {
  const buttons = []
  
  for(let i = 0; i < props.amount; i++) {
    buttons.push(<Element key={i}></Element>)
  }
  
  return (
    <div className={'Row'}>
      {buttons.map(element => element)}
    </div>
  
  )
}

export default Row