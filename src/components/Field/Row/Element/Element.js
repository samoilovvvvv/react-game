import React from 'react'
import './Element.scss'

const Element = props => {
  let comparison = false
  
  for (let i of props.minesCoordinates) {
    if(props.x === i.x && props.y === i.y) {
      comparison = true
      break
    }
  }
  
  return (
    <button
      className={'Element'}
      onClick={props.onClick}
      data-x={props.x}
      data-y={props.y}
    >
      {comparison ? 1 : 0}
    </button>
  )
}

export default Element