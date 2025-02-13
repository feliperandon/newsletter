import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <label>Nome</label>
        <input type="text" placeholder="Digite o seu nome" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="Digite o seu email" />
      </div>
      <div>
        <a href="Ler os termos"></a>
        <div>
          <input type="checkbox" />
          <label>Concordo com os termos</label>
        </div>
      </div>
      <button>Cadastrar</button>
    </form>
  );
};

export default Form;
