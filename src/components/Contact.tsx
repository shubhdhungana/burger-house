
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact <span className="text-burger-primary">Us</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to make a reservation? Get in touch with us and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Card className="p-6 shadow-lg h-full">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="Your Message" className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-burger-primary hover:bg-burger-accent text-white">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Our Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-burger-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">Thamel, Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-burger-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-gray-600">+977-01-4123456</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-burger-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-gray-600">info@burgerhousekathmandu.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-burger-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Opening Hours</h4>
                    <p className="text-gray-600">Everyday: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Location Map</h3>
              <div className="rounded-lg overflow-hidden h-[250px] bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Map Location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
