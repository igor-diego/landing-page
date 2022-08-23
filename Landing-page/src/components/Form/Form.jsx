import React from 'react'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import S from './Form.module.css'


export const Form = () => {
  return (
    <form className={S.form}>
          <Label texto='Seu nome aqui:'/> 
            <input type="text" name="" id="" className={S.input} />
            <Label texto='E-mail:'/>
            <input type="email" name="" id="" className={S.input} />
            <Label texto='CPF:'/>
            <input type="number" name="" id="" className={S.input} />
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
            <Button style={S.button} texto='Enviar' />
    </form>
  )
}
