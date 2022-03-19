import React from 'react';
import Image from 'next/image';
import cmms from '../../imagens/cmms-presentation.png';
import sensor from '../../imagens/sensor-plataforma-celular-tablet.png';

function Servicos() {
  return (
    <section>
      <h1>
        MANUTENÇÃO PREDITIVA DESCOMPLICADA
      </h1>
      <p>
        Mantenha a sua equipe e seus ativos com o melhor desempenho
      </p>
      <article>
        <h1>
          Software de Manutenção
          <br />
          TracOS
        </h1>
        <Image src={cmms} />
        <p>
          O CMMS revolucionário para planejar, acompanhar métricas e conectar-se com sua equipe.
        </p>
        <button type="button">Ver mais</button>
      </article>
      <article>
        <h1>
          Monitoramento Online
          <br />
          Smart Trac
        </h1>
        <Image src={sensor} />
        <p>
          O sistema preditivo mais completo do mercado.
          Monitore vibração, temperatura e horímetro dos seus ativos.
        </p>
        <button type="button">Ver mais</button>
      </article>
    </section>
  );
}

export default Servicos;
