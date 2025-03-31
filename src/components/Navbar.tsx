
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-muted shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold">
            Burger<span className="text-burger-secondary">House</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-burger-secondary transition-colors">Home</a>
          <a href="#menu" className="font-medium hover:text-burger-secondary transition-colors">Menu</a>
          <a href="#about" className="font-medium hover:text-burger-secondary transition-colors">About</a>
          <a href="#contact" className="font-medium hover:text-burger-secondary transition-colors">Contact</a>
          <Button variant="default" className="bg-burger-secondary hover:bg-burger-primary text-white font-medium rounded-full flex items-center gap-2">
            <Phone size={16} /> Order Now
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background px-4 py-5 shadow-lg animate-accordion-down border-t border-muted">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="font-medium px-2 py-1 hover:text-burger-secondary transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#menu" className="font-medium px-2 py-1 hover:text-burger-secondary transition-colors" onClick={toggleMenu}>Menu</a>
            <a href="#about" className="font-medium px-2 py-1 hover:text-burger-secondary transition-colors" onClick={toggleMenu}>About</a>
            <a href="#contact" className="font-medium px-2 py-1 hover:text-burger-secondary transition-colors" onClick={toggleMenu}>Contact</a>
            <Button variant="default" className="bg-burger-secondary hover:bg-burger-primary text-white font-medium rounded-full flex items-center justify-center gap-2">
              <Phone size={16} /> Order Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
