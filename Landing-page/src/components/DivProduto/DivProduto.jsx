import React from "react";
import { Button } from "../Button/Button";
import S from "./DivProduto.module.css";
export const DivProduto = ({ imagem, nome, desc, de, por, ou }) => {
  return (
    <div className={S.div}>
      <img src={imagem} alt="" className={S.img} />
      <h4>{nome}</h4>
      <p>{desc}</p>
      <p>De R$: {de}</p>
      <h4>
        Por: {por}
        <strong></strong>
      </h4>
      <p>Ou 2x {ou}</p>
      <Button style={S.button} texto="Comprar" />
    </div>
  );
};
