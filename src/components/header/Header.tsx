"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-end md:justify-between items-center p-4 bg-white/80 backdrop-blur-md border-b border-pink-100 relative shadow-lg">
      <div className="text-2xl font-bold absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0">
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          KotoNail
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-lg">
        <Link 
          href="/" 
          className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium relative group"
        >
          ホーム
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          href="/about" 
          className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium relative group"
        >
          セラピスト
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          href="/menu" 
          className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium relative group"
        >
          メニュー
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          href="/gallery" 
          className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium relative group"
        >
          ギャラリー
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          href="/contact" 
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
        >
          ご予約
        </Link>
      </nav>
      {/* ハンバーガーメニューボタン */}
      <button 
        className={`md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none cursor-pointer ${isOpen ? 'z-20' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="メニュー"
      >
        <span className={`w-6 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {
        isOpen && (
          <div className="fixed inset-0 z-10 bg-gradient-to-br from-pink-50/95 via-purple-50/95 to-indigo-50/95 backdrop-blur-lg flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center gap-8 text-xl">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/menu" 
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/gallery" 
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )
      }
    </div>
  )
}