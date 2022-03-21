import React from 'react';

export default function Navbar() {
  return (
    <nav className="hidden ml-16 lg:grid text-white grid-cols-2 gap-2 items-center">
      <ul className="flex gap-6">
        <li>Soluções</li>
        <li>Sobre Nós</li>
        <li>Materiais Gratuitos</li>
        <li>Blog</li>
      </ul>
      <div className="flex gap-6 pl-5 items-center ml-32">
        <a href="/" className=" font-extrabold">Área do CLiente</a>
        <button type="button" className="bg-yellow-500 rounded px-6 py-2">Demonstração</button>
      </div>
    </nav>
  );
}
