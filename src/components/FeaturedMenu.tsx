
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Star } from 'lucide-react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Cheese Burger",
    description: "Juicy beef patty with melted cheese, fresh lettuce, tomatoes and our special sauce",
    price: 350,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    rating: 4.8,
    category: "burger"
  },
  {
    id: 2,
    name: "Chicken Tikka Pizza",
    description: "Flavorful chicken tikka on our homemade thin crust with bell peppers and onions",
    price: 450,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.6,
    category: "pizza"
  },
  {
    id: 3,
    name: "Steam Chicken Momo",
    description: "Traditional Nepali dumplings filled with minced chicken, herbs and spices",
    price: 250,
    image: "https://images.unsplash.com/photo-1626776877966-c1c1207e80f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
    rating: 4.9,
    category: "momo"
  },
  {
    id: 4,
    name: "BBQ Bacon Burger",
    description: "Grilled beef patty topped with crispy bacon, cheddar cheese and BBQ sauce",
    price: 420,
    image: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    category: "burger"
  }
];

const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center text-xs font-medium">
          <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
          {item.rating}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <span className="font-bold text-burger-primary">Rs. {item.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <Button className="w-full bg-burger-primary hover:bg-burger-accent text-white">
          <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
        </Button>
      </div>
    </Card>
  );
};

const FeaturedMenu = () => {
  return (
    <section id="menu" className="py-16 bg-burger-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-burger-primary">Popular</span> Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handcrafted menu featuring the finest ingredients and authentic flavors that will satisfy your cravings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-burger-secondary hover:bg-burger-primary text-white font-medium px-8 py-6 rounded-full">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
