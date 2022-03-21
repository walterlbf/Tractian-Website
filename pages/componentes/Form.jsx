import React from 'react';

export default function Form() {
  return (
    <section className="grid grid-col-span-1 gap-4 pb-24 lg:px-36 items-center">
      <h1 className="text-3xl text-center">
        Melhore os seus processos de manutenção
      </h1>
      <p className="text-center my-6">
        Preencha o formulário para uma demonstração.
      </p>
      <form action="" className="p-6 grid grid-cols-1 gap-4 rounded-xl text-white text-left bg-gray-900">

        <label htmlFor="firstname" className="grid grid-rows-2">
          Nome
          <input className="rounded-xl p-2" type="text" name="firstname" placeholder="Insira seu nome" />
        </label>

        <label htmlFor="cargo" className=" grid grid-rows-2">
          Cargo
          <input className="rounded-xl p-2" type="text" name="cargo" placeholder="Insira seu cargo" />
        </label>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
          <label htmlFor="email" className=" grid grid-rows-2">
            E-mail profissional
            <input type="text" name="email" className="rounded-xl p-2" placeholder="Insira seu e-mail" />
          </label>

          <label htmlFor="telefone" className="grid grid-rows-2">
            Telefone
            <input type="text" name="telefone" className="rounded-xl p-2" placeholder="+55(XX) xxxxx-xxxx" />
          </label>
        </div>
        <button type="submit" className="rounded bg-yellow-500 px-16">Enviar</button>
      </form>
    </section>
  );
}
