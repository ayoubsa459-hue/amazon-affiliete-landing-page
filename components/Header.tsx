import React, { useState } from 'react';
import { MenuIcon, XIcon, SearchIcon } from './icons';

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const navLinks = [
    { href: '#products', text: 'Top Picks' },
    { href: '#testimonials', text: 'Reviews' },
    { href: '#about', text: 'Why Us?' },
  ];
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    if (newMenuState) {
      setIsMobileSearchOpen(false); // Close search when opening menu
    }
  };

  const toggleMobileSearch = () => {
    const newSearchState = !isMobileSearchOpen;
    setIsMobileSearchOpen(newSearchState);
    if (newSearchState) {
      setIsMenuOpen(false); // Close menu when opening search
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Tradify
        </a>

        {/* Desktop Navigation & Search */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-500 transition duration-300">
                {link.text}
              </a>
            ))}
          </nav>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="search"
              placeholder="Search products..."
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMobileSearch} aria-label="Toggle search">
            <SearchIcon className="w-6 h-6" />
          </button>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      {isMobileSearchOpen && (
         <div className="md:hidden p-4 border-t border-gray-200 bg-white">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="search"
                placeholder="Search products..."
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </div>
          </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-800 py-3 text-lg hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;