import React from "react";
import { Section } from "../Section/Section";
import { Section2 } from "../Section2/Section2";
import S from "./Main.module.css";
import { DivForm } from "../DivForm/DivForm";

export const Main = () => {
  return (
    <main className={S.main}>
      <Section />
      <div className={S.div}>
        <hr />
        <h3>Sua seleção especial</h3>
        <hr />
      </div>
      <Section2 />

      <div className={S.div}>
        <hr />
        <h3>Compartilhe a novidade</h3>
        <hr />
      </div>
      <p className={S.p}>
        Quer que seus amigos também ganhe a lista personalizada deles? Preencha
        agora
      </p>
      <DivForm />
    </main>
  );
};
