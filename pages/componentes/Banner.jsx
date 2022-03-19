import Image from 'next/image';
import React from 'react';
import banner from '../../imagens/TRACTIAN_HOMEPAGE_ANIM.svg';
import ondas from '../../imagens/ondas.svg';

export default function Banner() {
  return (
    <>
      <section className="text-white lg:grid lg:grid-cols-2 bg-gradient-to-l from-black to-gray-800 justify-center align-center px-6 pt-36">
        <div className="">
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
        <Image src={banner} className="h-full w-screen" />
      </section>
      <div className="">
        {/* <Image src={ondas} alt="" className="w-screen h-screen lg:m-7 bg-gradient-to-l from-black to-gray-800" /> */}
      </div>
    </>
  );
}
