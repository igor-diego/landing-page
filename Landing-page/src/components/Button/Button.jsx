import React from 'react'
import S from './Button.module.css'

export const Button = ({texto, style, onClick}) => {
  return (
    <button className={style} onClick={onClick}>{texto}</button>
  )
}
