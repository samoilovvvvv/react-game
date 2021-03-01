import React from 'react'
import './Element.scss'
import mine from '../../../../img/mine.png'

const Element = props => {
  const cls = ['Element']
  let comparison = false
  
  for (let key in props.itemState) {
    if((String(props.x) + String(props.y)) === key) {
      cls.push(props.itemState[key])
  
      for (let i of props.minesCoordinates) {
        if(props.x === i.x && props.y === i.y) {
          comparison = true
          break
        }
      }
    }
  }
  
  return (
    <div
      className={cls.join(' ')}
      onClick={props.onClick}
      data-x={props.x}
      data-y={props.y}
    >
      {comparison ? <img alt={'mine'} src={mine}/> : null}
    </div>
  )
}

export default Element