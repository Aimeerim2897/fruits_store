import React from 'react'
import './Button.scss'
const Button = (props) => {
  const { children, style, onClick } = props;
  return (
    <button style={style} onClick={onClick}>{children}</button>
  )
}

export default Button