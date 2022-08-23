import React from 'react'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import S from './DivForm.module.css'

export const DivForm = () => {
  return (
    <form className={S.form} >
        <div className={S.divFom}>
          <Label texto='Nome do seu amigo'/>
          <input className={S.Input} type="text" />
        </div>
        <div className={S.divFom}>
          <Label texto='E-mail' />
          <input className={S.Input}  type="email" />
          <div>
            <div className={S.divButton}><Button style={S.Button} texto='Enviar agora' /></div>
        </div>
        </div>
    </form>
  )
}
