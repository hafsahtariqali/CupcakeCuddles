import React from 'react';
import { motion } from 'framer-motion';
import { Phone,  Mail,  MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-12 ml-10 mr-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <h1 className="text-center text-5xl font-extrabold font-spartan text-[#482113] tracking-tight mt-6">CONTACT US</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-left font-spartan text-[#482113] tracking-tight mt-8 mb-4">Send Us A Message</h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#EADDCA] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#EADDCA] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-[#EADDCA] focus:outline-none"
                rows="5"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#66311E] text-white py-3 px-8 rounded-full font-bold hover:bg-[#4A0404] transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          className="text-left lg:ml-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-left font-spartan text-[#482113] tracking-tight mt-8 mb-4">Contact Information</h3>
          <div className='flex justify-between items-center max-w-[160px]'>
            <Phone color='#482113' size={18} /> 
            <p className="text-lg font-light font-alegreya mb-4">
              (123) 456 789
            </p>
          </div>
          <div className='flex justify-between items-center max-w-[280px]'>
            <Mail color='#482113' size={18} />
            <p className="text-lg font-light font-alegreya  mb-4">
              cupcakecuddles@gmail.com
            </p>
          </div>
          <div className='flex justify-between items-center'>
            <MapPin color='#482113' size={18} />
            <p className="text-lg font-light font-alegreya ml-14 mb-3">
              1445 Floral Ave, New York City, United States
            </p>
          </div>
        </motion.div>
      </div>
      </motion.div>
    </div>
  );
};

export default Contact;
