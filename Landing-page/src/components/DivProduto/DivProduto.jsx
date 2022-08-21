import React from 'react'
import { Button } from '../Button/Button'
import S from './DivProduto.module.css'
export const DivProduto = () => {
  return (
    <div className={S.div}>
    <img src="" alt="" className={S.img}/>
    <h4>nome do produto</h4>
    <p>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
    <p>De: R$23,99</p>
    <h4><strong>Por: R$19,99</strong></h4>
    <p>ou 2x de R$9,99</p>
    <Button texto='Comprar'/>
    </div> 
    )
}   