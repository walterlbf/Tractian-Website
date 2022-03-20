import React from 'react';

export default function Insumos() {
  return (
    <section className="p-10">
      <article className="text-center items-center p-10">
        <h1 className="text-3xl sm:text-4xl mb-6">
          Suas máquinas mais seguras.
        </h1>
        <div className="h-1 mb-4 mx-auto bg-black w-64 my-6 rounded" />
      </article>
      <section className="grid grid-cols-3 gap-16 text-center ">
        <article>
          <h1 className="text-4xl font-bold">
            90%
          </h1>
          <p className="text-sm mt-4">
            DE ASSERTIVIDADE DOS INSIGHTS GERADOS PELA PLATAFORMA.
          </p>
        </article>
        <article className="border-gray-500">
          <h1 className="text-4xl font-bold ">
            45%
          </h1>
          <p className="text-sm mt-4">
            AUMENTO DE CONFIABILIDADE DAS MÁQUINAS COM SISTEMA TRACTIAN.
          </p>
        </article>
        <article>
          <h1 className="text-4xl font-bold">
            30%
          </h1>
          <p className="text-sm mt-4">
            REDUÇÃO DAS OCORRÊNCIAS DE ÚLTIMA HORA NA MANUTENÇÃO.
          </p>
        </article>
      </section>
    </section>
  );
}
