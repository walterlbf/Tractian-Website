import Image from 'next/image';
import React from 'react';
import logo from '../../imagens/Logo-Tractian.svg';
import menu from '../../imagens/hamburguer-menu.svg';

export default function Header() {
  return (
    <header className="bg-gradient-to-l from-blue-600 to-blue-900 flex w-full justify-center px-4 sm:px-6 fixed z-50">
      <div className="w-full flex justify-between items-center m-4">
        <div className="mr-12">
          <Image src={logo} width={159} height={53} />
        </div>
        <nav className="hidden lg:flex"> nav </nav>
        <button type="button" className="w-10 h-10 border rounded-md p-2 inline-flex items-center justify-center text-gray-50 lg:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <Image src={menu} width={24} height={24} className="fill-none" />
        </button>
      </div>
    </header>
  );
}
