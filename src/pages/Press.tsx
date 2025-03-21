import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Press = () => {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Barack Obama Announces 2028 Presidential Campaign",
      excerpt: "Former President Barack Obama launches his campaign for the 2028 presidential election, emphasizing unity and progress.",
      link: "/press/campaign-announcement"
    },
    {
      date: "March 20, 2024",
      title: "Obama Unveils Comprehensive Climate Action Plan",
      excerpt: "Ambitious proposal aims to achieve carbon neutrality by 2040 while creating millions of green energy jobs.",
      link: "/press/climate-plan"
    },
    {
      date: "March 25, 2024",
      title: "Healthcare Reform at the Center of Campaign Platform",
      excerpt: "New healthcare initiative builds on the Affordable Care Act's success with expanded coverage and reduced costs.",
      link: "/press/healthcare-reform"
    },
    {
      date: "April 1, 2024",
      title: "National Unity Tour Announced",
      excerpt: "Barack Obama to visit all 50 states, promoting message of unity and renewed American purpose.",
      link: "/press/unity-tour"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-75" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Press Releases</h1>
            <p className="text-xl max-w-2xl">
              Latest updates and announcements from the campaign trail.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Press Releases Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {pressReleases.map((release, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8"
            >
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                {release.date}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                {release.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {release.excerpt}
              </p>
              <Link
                to={release.link}
                className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
              >
                Read full release <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Media Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Media Contact</h2>
            <p className="text-gray-600 mb-8">
              For press inquiries, please contact our communications team:
            </p>
            <div className="inline-block bg-white rounded-lg shadow-md p-8">
              <p className="font-semibold">Press Office</p>
              <p className="text-gray-600">press@obama2028.com</p>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Press;