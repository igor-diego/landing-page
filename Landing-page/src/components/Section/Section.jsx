import React from "react";
import { Div } from "../Div/Div";
import { Form } from "../Form/Form";
import S from "./Section.module.css";

export const Section = () => {
  return (
    <section className={S.section}>
      <Div />
      <Form />
    </section>
  );
};
