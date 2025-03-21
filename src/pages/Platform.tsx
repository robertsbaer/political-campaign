import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Platform = () => {
  const platforms = [
    {
      category: "Healthcare",
      points: [
        "Universal healthcare coverage for all Americans",
        "Lower prescription drug prices",
        "Expanded mental health services",
        "Protection for pre-existing conditions"
      ]
    },
    {
      category: "Environment",
      points: [
        "Transition to 100% clean energy by 2035",
        "Investment in green infrastructure",
        "Protection of public lands",
        "Support for environmental justice initiatives"
      ]
    },
    {
      category: "Economy",
      points: [
        "Living wage for all workers",
        "Small business support programs",
        "Fair tax reform",
        "Infrastructure investment"
      ]
    },
    {
      category: "Education",
      points: [
        "Debt-free public college",
        "Universal pre-K education",
        "Increased teacher pay",
        "Modern school infrastructure"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vision for America 2028</h1>
            <p className="text-xl max-w-2xl">
              A bold plan to unite and strengthen America for the next generation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Platform Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-700">{platform.category}</h2>
              <ul className="space-y-4">
                {platform.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in building a better future for our district and our nation.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/volunteer"
              className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Volunteer
            </a>
            <a
              href="/donate"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;