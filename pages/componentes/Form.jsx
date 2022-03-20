import React from 'react';

export default function Form() {
  return (
    <section>
      <h1 className="text-3xl text-center">
        Melhore os seus processos de manutenção
      </h1>
      <p className="text-center my-6">
        Preencha o formulário para uma demonstração.
      </p>
      <form action="" className=" text-left bg-gray-900">
        <div>
          <label htmlFor="firstname">
            Nome
            <input type="text" name="firstname" placeholder="Insira seu nome" />
          </label>
        </div>
        <div>
          <label htmlFor="cargo">
            Cargo
            <input type="text" name="cargo" placeholder="Insira seu cargo" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            E-mail profissional
            <input type="text" name="email" placeholder="Insira seu e-mail" />
          </label>
        </div>
        <div>
          <label htmlFor="telefone">
            Telefone
            <input type="text" name="telefone" placeholder="Insira seu telefone" />
          </label>
        </div>
        <div>
          <label htmlFor="firstname">
            Nome
            <input type="text" name="firstname" placeholder="Insira seu nome" />
          </label>
        </div>
        <button type="submit" className="rounded bg-yellow-500 px-16">Enviar</button>
      </form>
    </section>
  );
}
