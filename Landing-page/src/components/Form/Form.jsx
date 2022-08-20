import React from 'react'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import S from './Form.module.css'


export const Form = () => {
  return (
    <form className={S.form}>
          <Label texto='Seu nome aqui:'/> 
            <input type="text" name="" id="" placeholder='Digite seu nome' className={S.input} />
            <Label texto='E-mail:'/>
            <input type="email" name="" id="" placeholder='Digite seu email' className={S.input} />
            <Label texto='CPF:'/>
            <input type="number" name="" id="" placeholder='Digite seu CPF' className={S.input} />
            <div className={S.radioBtn}>
                <div>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">Masculino</label>
                </div>
                    <div className={S.radioBtn2}>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Feminino</label>
                    </div>
            </div>
            <Button texto='Enviar' />
    </form>
  )
}
