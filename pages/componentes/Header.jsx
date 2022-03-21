import Image from 'next/image';
import React from 'react';
import logo from '../../imagens/Logo-Tractian.svg';
import menu from '../../imagens/hamburguer-menu.svg';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="flex w-full justify-center text-center bg-black shadow-sm shadow-white px-4 sm:px-6 fixed z-50 ">
      <div className="w-full flex justify-around items-center m-4">
        <div className="my-6 flex">
          <Image src={logo} width={159} height={53} className="" />
          <Navbar className="hidden lg:flex" />
        </div>
        <button type="button" className="w-10 h-10 border rounded-full p-2 inline-flex items-center justify-center border-yellow-500 text-gray-50 lg:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <Image src={menu} width={16} height={16} className="fill-none" />
        </button>
      </div>
    </header>
  );
}
