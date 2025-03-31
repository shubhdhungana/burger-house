
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burger-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Burger<span className="text-burger-secondary">House</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Indulge in our mouthwatering burgers, pizzas, momos and more. 
              Handcrafted with premium ingredients for an unforgettable taste experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-burger-secondary transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-burger-secondary transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-burger-secondary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-burger-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: 10:00 AM - 10:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-burger-secondary mr-3 mt-1 flex-shrink-0" />
                <span>Thamel, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-burger-secondary mr-3 mt-1 flex-shrink-0" />
                <span>+977-01-4123456</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-burger-secondary mr-3 mt-1 flex-shrink-0" />
                <span>info@burgerhousekathmandu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Burger House Kathmandu. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Website built by <a href="mailto:shubhdhungana@gmail.com" className="text-burger-secondary hover:underline">Subh Dhungana</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
