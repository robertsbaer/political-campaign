import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Heart } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [recurring, setRecurring] = useState(false);

  const predefinedAmounts = ['25', '50', '100', '250', '500', '1000'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a payment processor
    console.log('Processing donation:', {
      amount: amount || customAmount,
      recurring
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Campaign</h1>
            <p className="text-xl max-w-2xl">
              Your contribution helps build a better future for our community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Donation Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Donation Amount Selection */}
            <div>
              <label className="block text-lg font-semibold mb-4">Select Donation Amount</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {predefinedAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      amount === preset
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-blue-600'
                    }`}
                    onClick={() => {
                      setAmount(preset);
                      setCustomAmount('');
                    }}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or enter custom amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('');
                    }}
                    className="pl-10 w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-blue-600"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>

            {/* Recurring Donation Option */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="recurring"
                checked={recurring}
                onChange={(e) => setRecurring(e.target.checked)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="recurring" className="text-gray-700">
                Make this a monthly recurring donation
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Heart className="mr-2" />
              Donate Now
            </button>
          </form>

          {/* Donation Info */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Contributions or gifts to Obama for America 2028 are not tax deductible. Federal law requires us to use our best efforts to collect and report the name, mailing address, occupation and name of employer of individuals whose contributions exceed $200 in an election cycle.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                amount: "$25",
                impact: "Helps reach 500 voters through digital advertising"
              },
              {
                amount: "$50",
                impact: "Provides campaign materials for 10 volunteers"
              },
              {
                amount: "$100",
                impact: "Supports a day of community outreach events"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <p className="text-2xl font-bold text-blue-600 mb-2">{item.amount}</p>
                <p className="text-gray-600">{item.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;