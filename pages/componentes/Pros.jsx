import Image from 'next/image';
import React from 'react';
import horimeter from '../../imagens/icon-maintence-horimeter.svg';
import plataform from '../../imagens/icon-maintence-plataform.svg';
import online from '../../imagens/icon-maintence-online.svg';
import pump from '../../imagens/icon-maintence-pump.svg';

export default function Pros() {
  return (
    <section>
      <h1>
        Por que escolher a Tractian?
      </h1>
      <article>
        <Image src={plataform} width={80} height={70} />
        <h2>
          Manutenção Preditiva
        </h2>
        <p>
          Detecção automática de falhas,
          saúde do ativo em tempo real,
          confiabilidade e insights automáticos.
        </p>
      </article>
      <article>
        <Image src={online} width={80} height={70} />
        <h2>
          Monitoramento Online
        </h2>
        <p>
          Sensor Tractian coleta dados de vibração,
          temperatura,
          horímetro e consumo de energia em tempo real.

        </p>
      </article>
      <article>
        <Image src={pump} width={80} height={70} />
        <h2>
          Setup Instantâneo
        </h2>
        <p>
          Solução Plug & Play,
          sem necessidade de WiFi industrial, comunicação via 3G/4G independente.
        </p>
      </article>
      <article>
        <Image src={horimeter} width={80} height={70} />
        <h2>
          CMMS Integrado
        </h2>
        <p>
          Automatize processos,
          ordens de serviço e tenha total controle sobre seus ativos e equipe.

        </p>
      </article>
      <div className="text-center">
        <button type="button">Fale com um especialista</button>
      </div>
    </section>
  );
}
