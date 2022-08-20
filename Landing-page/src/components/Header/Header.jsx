import React from 'react'
import { Button } from '../Button/Button'
import S from './Header.module.css'

export const Header = () => {
  return (
    <header className={S.header}>
        <div className={S.divHeader}>
            <p>Uma seleção de produtos</p>
            <p className={S.p}><span>especial para você</span></p>
            <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite! </p>
        </div>
        <div className={S.divBtn}>
            <Button texto='Conheça a linux'/>
            <Button texto='Ajude o algorítimo'/>
            <Button texto='Seus profutos'/>
            <Button texto='Compartilhe'/>
        </div>
    </header>
  )
}
