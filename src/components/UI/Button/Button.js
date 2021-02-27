import React from 'react'
import './Button.scss'

const Button = props => {
  return (
    <button className={'Button'}><p>{props.children}</p></button>
  )
}

export default Button