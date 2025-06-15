import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Botão Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-black focus:outline-none"
          aria-label="Abrir menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Logo centralizada com flex-grow */}
        <div className="flex-1 flex justify-center md:justify-center">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.jpeg"
              alt="Logo"
              className="h-25 w-auto object-contain"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Espaço reservado para alinhar o botão e a logo central */}
        <div className="w-8 md:hidden" /> {/* espaço do botão mobile simétrico */}
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium text-black">
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
