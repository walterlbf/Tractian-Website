import React from 'react';

export default function Footer() {
  return (
    <footer className="p-10 bg-black text-white grid grid-cols-2 gap-4">
      <nav>
        <h1 className="font-extrabold">
          PRODUTO
        </h1>
        <ul>
          <li>Sensor Tractian</li>
          <li>Plataforma</li>
          <li>Funcionalidades</li>
          <li>Planos e preços</li>
        </ul>
      </nav>
      <nav>
        <h1 className="font-extrabold">
          MATERIAIS
        </h1>
        <ul>
          <li>Guias e ebooks</li>
          <li>Cheklists</li>
          <li>Intensivao</li>
          <li>calculadora</li>
        </ul>
      </nav>
    </footer>
  );
}
