import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Campaign Headquarters</p>
            <p>1600 Pennsylvania Avenue</p>
            <p>Washington, DC 20500</p>
            <p className="mt-2">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/volunteer" className="hover:text-blue-400">Volunteer</a></li>
              <li><a href="/events" className="hover:text-blue-400">Events</a></li>
              <li><a href="/press" className="hover:text-blue-400">Press Releases</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>Paid for by Obama for America 2028</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Barack Obama for President 2028. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;