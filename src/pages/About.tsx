import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://live-production.wcms.abc-cdn.net.au/f70dbfc17eb519804d1ce102dcfdc324')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Barack Obama
          </motion.h1>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://www.businessbecause.com/uploads/default/news/images/8f5653650efbcc657b086663ab24e014438b2eb8.png"
              alt="Sarah Mitchell"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">A Legacy of Leadership</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Barack Obama has dedicated his life to public service. As the 44th President of the United States,
                he led America through significant challenges and achievements from 2009 to 2017.
              </p>
              <p>
                After graduating from Columbia University and Harvard Law School, Barack worked as a community organizer,
                civil rights attorney, and law professor. He served in the Illinois State Senate and as a U.S. Senator
                before making history as America's first Black president.
              </p>
              <p>
                During his presidency, Barack Obama passed landmark healthcare reform, led the country out of a major
                recession, secured the Paris Climate Agreement, and advanced civil rights. Now, he's ready to lead
                America forward again.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Leadership",
                description: "Led initiative to reduce city carbon emissions by 30%"
              },
              {
                title: "Education Reform",
                description: "Secured funding for after-school programs in underserved areas"
              },
              {
                title: "Economic Development",
                description: "Created small business support program helping 200+ local businesses"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Personal Life Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Personal Life</h2>
          <p className="text-gray-600 mb-8">
            Sarah lives in the heart of our district with her husband John and their two children.
            When she's not working for our community, she enjoys hiking local trails, volunteering
            at the food bank, and coaching her daughter's soccer team. Her deep roots in our
            community drive her passion for public service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;