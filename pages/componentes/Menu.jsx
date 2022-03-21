import React from 'react';
import close from '../../imagens/excluir.svg';

export default function Menu() {
  return (
    <ul className="">
      <button type="button" className="w-10 h-10 border rounded-full p-2 inline-flex items-center justify-center border-yellow-500 text-gray-50 lg:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <Image src={close} width={16} height={16} className="fill-none" />
      </button>
      <li>Soluções</li>
      <li>Sobre Nós</li>
      <li>Materiais Gratuitos</li>
      <li>Blog</li>
    </ul>
  );
}
