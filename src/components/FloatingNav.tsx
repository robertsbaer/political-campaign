import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/platform', label: 'Platform' },
    { path: '/press', label: 'Press' },
    { path: '/volunteer', label: 'Join Us', highlight: true },
    { path: '/donate', label: 'Donate', highlight: true },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full ${
          scrolled ? 'bg-blue-600' : 'bg-transparent'
        } md:hidden`}
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6 text-white" />
      </motion.button>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : -100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className={`w-full ${scrolled ? 'bg-blue-600/90 backdrop-blur-sm' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200 transition-colors">
                Obama 2028
              </Link>
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative group ${
                      item.highlight 
                        ? 'px-4 py-2 bg-yellow-400 text-blue-900 rounded-full font-bold hover:bg-yellow-300'
                        : 'text-white hover:text-blue-200'
                    } transition-all`}
                  >
                    {item.label}
                    {!item.highlight && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-blue-600 z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-8 w-8 text-white" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-grow space-y-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <Link
                      to={item.path}
                      className="text-white text-4xl font-bold hover:text-blue-200 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;