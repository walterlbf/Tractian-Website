import Image from 'next/image';
import React from 'react';
import banner from '../../imagens/TRACTIAN_HOMEPAGE_ANIM.svg';
import ondas from '../../imagens/ondas.svg';

export default function Banner() {
  return (
    <>
      <section className="text-white bg-gradient-to-l from-black to-gray-800 container justify-center px-6 pt-36 lg:flex">
        <div className="container">
          <h1 className="text-xl font-semibold mr-5 mb-5">
            Monitoramento Online e Gestão de Ativos em um só lugar
          </h1>
          <p className="mb-5 font-light">
            Evite falhas nas suas máquinas e torne o tempo de inatividade uma
            coisa do passado com sistema preditivo da TRACTIAN.
          </p>
          <button type="button" className="bg-yellow-500 rounded px-6 py-2">Demonstração</button>
          <p className="mt-2 font-light">
            Já é cliente?
            <a
              href="https://app.tractian.com/login"
              target="_blank"
              className="font-bold ml-1"
              rel="noreferrer"
            >
              Acesse aqui.
            </a>
          </p>
        </div>
        <Image src={banner} className="w-full h-full" />
      </section>
      <Image src={ondas} className="bg-gradient-to-l from-black to-gray-800" />
    </>
  );
}
