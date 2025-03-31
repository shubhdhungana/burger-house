
import React from 'react';
import { CheckCircle, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-burger-primary">Burger House</span></h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, Burger House Kathmandu has been serving the most delicious burgers, pizzas, momos and more to our valued customers. 
              What started as a small family business has grown into one of the most beloved food destinations in Kathmandu.
            </p>
            <p className="text-gray-600 mb-6">
              We take pride in using only the freshest ingredients, handcrafted recipes, and providing exceptional service. 
              Our chefs are passionate about creating mouthwatering dishes that keep our customers coming back for more.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-burger-primary mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Premium quality ingredients sourced from local farmers</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-burger-primary mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Handcrafted recipes developed by expert chefs</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-burger-primary mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Comfortable and friendly dining atmosphere</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-burger-light rounded-lg">
                <Award className="h-8 w-8 text-burger-primary mx-auto mb-2" />
                <h4 className="font-bold text-lg">Quality Food</h4>
              </div>
              <div className="text-center p-4 bg-burger-light rounded-lg">
                <Users className="h-8 w-8 text-burger-primary mx-auto mb-2" />
                <h4 className="font-bold text-lg">Happy Customers</h4>
              </div>
              <div className="text-center p-4 bg-burger-light rounded-lg">
                <Award className="h-8 w-8 text-burger-primary mx-auto mb-2" />
                <h4 className="font-bold text-lg">Best Service</h4>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Burger House Restaurant Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 bg-burger-secondary/20 rounded-lg z-0"></div>
            <div className="absolute -top-5 -left-5 w-1/3 h-1/3 bg-burger-primary/20 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
