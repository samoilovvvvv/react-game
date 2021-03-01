import React from 'react'
import Element from './Element/Element'
import './Row.scss'

const Row = props => {
  const buttons = []
  
  for(let i = 0; i < props.amount; i++) {
    buttons.push(
      <Element
        key={i}
        onClick={props.onClick}
        y={props.y}
        x={i + 1}
        minesCoordinates={props.minesCoordinates}
        itemState={props.itemState}
      >
      
      </Element>)
  }
  
  return (
    <div className={'Row'}>
      {buttons.map(element => element)}
    </div>
  
  )
}

export default Row