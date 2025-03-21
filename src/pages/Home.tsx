import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import obamaImage from '../assets/obamabarack.png';

const Home = () => {
  const controls = useAnimation();
  const [supportersCount, setSupportersCount] = useState(0);
  const [statesCount, setStatesCount] = useState(0);
  const [volunteersCount, setVolunteersCount] = useState(0);
  
  const statsRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          
          // Animate supporters count
          let startTime = null;
          const supportersDuration = 2500; // ms
          const supportersTarget = 138926190;
          
          const animateSupporters = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / supportersDuration, 1);
            setSupportersCount(Math.floor(progress * supportersTarget));
            
            if (progress < 1) {
              requestAnimationFrame(animateSupporters);
            }
          };
          
          requestAnimationFrame(animateSupporters);
          
          // Animate states count
          let statesStartTime = null;
          const statesDuration = 1500; // ms
          const statesTarget = 50;
          
          const animateStates = (timestamp) => {
            if (!statesStartTime) statesStartTime = timestamp;
            const progress = Math.min((timestamp - statesStartTime) / statesDuration, 1);
            setStatesCount(Math.floor(progress * statesTarget));
            
            if (progress < 1) {
              requestAnimationFrame(animateStates);
            }
          };
          
          requestAnimationFrame(animateStates);
          
          // Animate volunteers count
          let volunteersStartTime = null;
          const volunteersDuration = 2000; // ms
          const volunteersTarget = 26934;
          
          const animateVolunteers = (timestamp) => {
            if (!volunteersStartTime) volunteersStartTime = timestamp;
            const progress = Math.min((timestamp - volunteersStartTime) / volunteersDuration, 1);
            setVolunteersCount(Math.floor(progress * volunteersTarget));
            
            if (progress < 1) {
              requestAnimationFrame(animateVolunteers);
            }
          };
          
          requestAnimationFrame(animateVolunteers);
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 pattern-dots pattern-blue-500 pattern-bg-transparent pattern-size-4 pattern-opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 h-screen flex items-center">
          <div className="w-full grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white max-w-4xl"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                A New Vision<br />For America
              </h1>
              <p className="text-2xl md:text-3xl mb-12 font-light">
                Join Barack Obama's movement to bring bold, progressive change back to America in 2028.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/donate"
                  className="group relative px-8 py-4 bg-white text-blue-600 text-xl font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                >
                  <span className="relative z-10">Donate Now</span>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
                <Link
                  to="/platform"
                  className="group relative px-8 py-4 border-2 border-white text-white text-xl font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                >
                  <span className="relative z-10">Our Vision</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block"
            >
              <img
                src={obamaImage}
                alt="Barack Obama"
                className="w-full h-auto max-h-[600px] object-contain rounded-lg"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        />
      </div>

      {/* Issues Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Medicare for All",
                description: "Healthcare is a human right. We're fighting for a system that puts people over profits.",
              },
              {
                title: "Green New Deal",
                description: "Bold climate action to create millions of green jobs and save our planet.",
              },
              {
                title: "Economic Justice",
                description: "A living wage, affordable housing, and an economy that works for everyone.",
              },
              {
                title: "Education",
                description: "Free public college and cancellation of student debt to invest in our future.",
              },
              {
                title: "Immigration Reform",
                description: "Humane immigration policies that keep families together and strengthen our communities.",
              },
              {
                title: "Racial Justice",
                description: "Dismantling systemic racism and ensuring equal justice under law.",
              },
            ].map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className={`absolute inset-0 ${issue.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-4">{issue.title}</h3>
                  <p className="text-gray-600 mb-6">{issue.description}</p>
                  <Link
                    to="/platform"
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Add before Issues Grid */}
      <div className="py-20 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-white"
            ref={statsRef}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Campaign Progress</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-5xl font-bold mb-2">
                  {supportersCount.toLocaleString()}
                </div>
                <p className="text-xl">Supporters Nationwide</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold mb-2">
                  {statesCount}
                </div>
                <p className="text-xl">States Visited</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold mb-2">
                  {volunteersCount.toLocaleString()}
                </div>
                <p className="text-xl">Volunteers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Join Movement Section */}
      <div className="relative py-20 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 pattern-dots pattern-white pattern-bg-transparent pattern-size-4 pattern-opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Join the Movement</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Together, we can build a future that works for all of us, not just those at the top.
            </p>
            <Link
              to="/volunteer"
              className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 hover:text-blue-700 transition-colors"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;