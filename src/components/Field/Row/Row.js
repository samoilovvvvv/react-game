import React from 'react'

const Row = props => {
  let buttons = [];
  
  for(let i = 0; i < props.amount; i++) {
    buttons.push(<button key={i}></button>)
  }
  
  return (
    <div className={'Row'}>
      {buttons.map(element => {
        return (
          element
        )
      })}
    </div>
  
  )
}

export default Row