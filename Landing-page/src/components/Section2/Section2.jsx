import React from "react";
import { useState, useEffect } from "react";
import { DivProduto } from "../DivProduto/DivProduto";
import S from "./Section2.module.css";

export const Section2 = () => {
  const [produtos, setProdutos] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    async function handleReq() {
      const resposta = await fetch(
        `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${pagina}`
      );
      const json = await resposta.json();
      setProdutos([...produtos, ...json.products]);
      // console.log(json);
    }
    handleReq();
  }, [pagina]);

  const proximaPag = () => {
    setPagina(pagina + 1);
  };

  return (
    <section className={S.Section2}>
      {produtos.length > 0 &&
        produtos.map((item, index) => {
          return (
            <DivProduto
              key={index}
              imagem={item.image}
              nome={item.name}
              desc={item.description}
              de={item.oldPrice}
              por={item.price}
              ou={item.installments.value}
            />
          );
        })}
      <div className={S.btnDiv}>
        <button onClick={proximaPag} className={S.button}>
          Ainda mais produtos
        </button>
      </div>
    </section>
  );
};
