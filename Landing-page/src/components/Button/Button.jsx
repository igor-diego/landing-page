import React from 'react'
import S from './Button.module.css'

export const Button = ({texto}) => {
  return (
    <button className={S.btn}>{texto}</button>
  )
}
