import React from "react";
import { Section } from "../Section/Section";
import { Section2 } from "../Section2/Section2";
import S from "./Main.module.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import { DivForm } from "../DivForm/DivForm";
import { Footer } from "../Footer/Footer";
export const Main = () => {
  const requisicao = () => {
    const [produtos, setProdutos] = useState([]);

    async function handleReq() {
      const resposta = await fetch(
        "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"
      );
      const json = resposta.json();
      console.log(json);

      setProdutos(json.produtos);
    }
  };

  return (
    <main className={S.main}>
      <Section />
      <div className={S.div}>
        <hr />
        <h3>Sua seleção especial</h3>
        <hr />
      </div>
      <Section2 />
      <Button style={S.button} texto="Ainda mais produtos aqui" />

      <div className={S.div}>
        <hr />
        <h3>Compartilhe a novidade</h3>
        <hr />
      </div>
      <p className={S.p}>Quer que seus amigos também ganhe a lista personalizada deles? Preencha agora</p>
      <DivForm />
      <Footer />
    </main>
  );
};
