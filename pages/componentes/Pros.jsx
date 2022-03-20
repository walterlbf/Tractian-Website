import Image from 'next/image';
import React from 'react';
import horimeter from '../../imagens/icon-maintence-horimeter.svg';
import plataform from '../../imagens/icon-maintence-plataform.svg';
import online from '../../imagens/icon-maintence-online.svg';
import pump from '../../imagens/icon-maintence-pump.svg';

export default function Pros() {
  return (
    <section className="px-4 py-12">
      <h1 className="text-center text-3xl pb-6">
        Por que escolher a
        <b> Tractian?</b>
      </h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <article className="text border-2 border-yellow-500 rounded px-8 py-12">
          <Image src={plataform} width={80} height={70} />
          <h2 className="text-left font-bold text-lg mb-2 mt-2">
            Manutenção Preditiva
          </h2>
          <p className="text-sm">
            Detecção automática de falhas,
            saúde do ativo em tempo real,
            confiabilidade e insights automáticos.
          </p>
        </article>
        <article className="text border-2 border-yellow-500 rounded px-8 py-12">
          <Image src={online} width={80} height={70} />
          <h2 className="text-left font-bold text-lg mb-2 mt-2">
            Monitoramento Online
          </h2>
          <p className="text-sm">
            Sensor Tractian coleta dados de vibração,
            temperatura,
            horímetro e consumo de energia em tempo real.
          </p>
        </article>
        <article className="text border-2 border-yellow-500 rounded px-8 py-12">
          <Image src={pump} width={80} height={70} />
          <h2 className="text-left font-bold text-lg mb-2 mt-2">
            Setup Instantâneo
          </h2>
          <p className="text-sm">
            Solução Plug & Play,
            sem necessidade de WiFi industrial, comunicação via 3G/4G independente.
          </p>
        </article>
        <article className="text border-2 border-yellow-500 rounded px-8 py-12">
          <Image src={horimeter} width={80} height={70} />
          <h2 className="text-left font-bold text-lg mb-2 mt-2">
            CMMS Integrado
          </h2>
          <p className="text-sm">
            Automatize processos,
            ordens de serviço e tenha total controle sobre seus ativos e equipe.
          </p>
        </article>
      </section>
      <div className="text-center mt-6">
        <button type="button" className="bg-yellow-500 rounded font-bold px-6 py-2">Fale com um especialista</button>
      </div>
    </section>
  );
}
