import React from 'react';
import Image from 'next/image';
import cmms from '../../imagens/cmms-presentation.png';
import sensor from '../../imagens/sensor-plataforma-celular-tablet.png';

function Servicos() {
  return (
    <section className="bg-white container p-4">
      <h1 className="text-yellow-600 text-lg tracking-wide font-semibold mb-4 lg:text-center sm:text-center">
        MANUTENÇÃO PREDITIVA DESCOMPLICADA
      </h1>
      <p className="text-2xl font-light mb-10">
        Mantenha a sua equipe e seus ativos com o
        <br />
        <b className="font-semibold">melhor desempenho</b>
      </p>
      <section className="flex lg:flex-row flex-col gap-8 mt-2 ">
        <article className="bg-gray-900 shadow-2xl w-full text-white rounded-lg p-4 mb-6">
          <h1 className="font-bold text-3xl mb-4">
            Software de Manutenção
            <br />
            TracOS
          </h1>
          <div className="bg-yellow-500 w-full h-2 mb-4" />
          <div className="text-center">
            <Image src={cmms} width={448} height={313.59} />
            <p className="my-6">
              O CMMS revolucionário para planejar, acompanhar métricas e conectar-se com sua equipe.
            </p>
          </div>
          <button type="button" className="bg-yellow-500 text-black rounded px-6 py-2">Ver mais</button>
        </article>
        <article className="shadow-2xl bg-yellow-500 rounded p-4 mb-6">
          <h1 className="font-bold text-3xl mb-4">
            Monitoramento Online
            <br />
            Smart Trac
          </h1>
          <div className="bg-black w-full h-2 mb-4" />
          <div className="text-center">
            <Image src={sensor} width={448} height={313.59} />
            <p className="my-6">
              O sistema preditivo mais completo do mercado.
              Monitore vibração, temperatura e horímetro dos seus ativos.
            </p>
          </div>
          <button type="button" className="bg-black rounded px-6 py-2 text-white">Ver mais</button>
        </article>
      </section>
    </section>
  );
}

export default Servicos;
