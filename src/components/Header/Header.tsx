import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-20">
      <div className="max-w-7xl mx-auto h-full px-6 relative flex items-center justify-between">
        
        {/* Botão Mobile (esquerda) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-black focus:outline-none z-10"
          aria-label="Abrir menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Logo centralizada com position absolute */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link to="/">
            <img
              src="/assets/logo.jpeg"
              alt="Logo"
              className="h-22 w-auto object-contain"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Menu Desktop (direita) */}
        <nav className="hidden md:flex space-x-8 font-medium text-black ml-auto">
          <Link to="/" className="hover:text-blue-700 transition">Início</Link>
          <Link to="/about" className="hover:text-blue-700 transition">Sobre</Link>
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden fixed top-20 left-0 w-full bg-white shadow-md z-40 px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700 transition">Início</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700 transition">Sobre</Link>
        </nav>
      )}
    </header>
  );
}
