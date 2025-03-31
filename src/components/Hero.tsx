
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Background animation elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-burger-secondary/10 animate-float blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-burger-secondary/5 animate-float animate-delay-300 blur-3xl"></div>
      </div>

      {/* Text Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <div className="flex flex-wrap mb-4 animate-slide-in">
            <span className="text-lg md:text-xl font-medium text-burger-secondary mr-2 animate-pulse-subtle">Welcome to</span>
            <span className="text-lg md:text-xl font-medium text-foreground/80 animate-pulse-subtle animate-delay-200">The Taste Revolution</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-in animate-delay-100">
            Burger<span className="text-burger-secondary">House</span> 
            <span className="block mt-2">Kathmandu</span>
          </h1>
          
          <div className="flex mb-8 animate-slide-in animate-delay-200">
            <div className="h-1 w-20 bg-burger-secondary rounded-full mr-3"></div>
            <div className="h-1 w-10 bg-burger-secondary/50 rounded-full"></div>
          </div>
          
          <p className="text-lg md:text-xl mb-8 text-foreground/80 animate-slide-in animate-delay-300">
            Indulge in our mouthwatering burgers, pizzas, momos and more. 
            Handcrafted with premium ingredients for an unforgettable taste experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-400">
            <Button className="bg-burger-secondary hover:bg-burger-primary text-white font-medium rounded-full px-6 py-6 flex items-center gap-2 text-lg">
              <ShoppingBag size={20} /> Order Online
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-medium rounded-full px-6 py-6 flex items-center gap-2 text-lg">
              Explore Menu <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Animated food icons */}
      <div className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 z-10">
        <div className="relative w-96 h-96">
          <div className="absolute top-0 left-0 text-6xl animate-bounce-slow animate-delay-100">🍔</div>
          <div className="absolute top-1/4 right-0 text-6xl animate-bounce-slow animate-delay-300">🍕</div>
          <div className="absolute bottom-0 left-1/4 text-6xl animate-bounce-slow animate-delay-500">🥤</div>
          <div className="absolute bottom-1/4 right-1/4 text-6xl animate-bounce-slow animate-delay-200">🍟</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
