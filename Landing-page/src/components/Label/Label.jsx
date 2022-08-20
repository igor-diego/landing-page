import React from 'react'
import S from './Label.module.css'

export const Label = ({texto}) => {
  return (
    <label htmlFor="" className={S.label}>{texto}</label>
  )
}
