import { useState, useEffect, useRef } from "react";
export function Column({ title }) {
  const [cardContent, setCardContent] = useState("");
  const [textAreaVisible, settextAreaVisible] = useState(false);
  return (
    <div className="list">
      <h1>{title}</h1>
      <button onClick={() => settextAreaVisible(!textAreaVisible)}>
        Clique para adicionar um cartão
      </button>
      <div
        textAreaVisible={textAreaVisible}
        className="addCard"
        style={{ display: textAreaVisible ? "block" : "none" }}
      >
        <textarea value={cardContent}></textarea>
        <div>
          <button>Adicionar Cartão</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
