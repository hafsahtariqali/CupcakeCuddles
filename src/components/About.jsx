import React from "react";
import { motion } from "framer-motion";
import TestimonialCarousel from './TestimonialSection';

const About = () => {
  return (
    <div id="aboutus" className="mt-8 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <h1 className="text-center text-5xl font-extrabold font-spartan text-[#482113] tracking-tight mt-8">ABOUT US</h1>
      <div className="text-center text-2xl font-bold font-spartan text-[#482113] tracking-tight mt-8 flex justify-center mb-8">
        <h3 className="max-w-[600px]">Created for <span className="text-[#E5AA70] italic">cupcake lovers and dreamers everywhere</span>, this project celebrates creativity, connection, and the sweet moments that bring us all together.</h3>
      </div>
      <div className="bg-[#482113] py-10 m-10 rounded-lg pb-12 h-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-4xl tracking-tighter font-bold text-white mb-12">Our <br></br>Kitchen Maestros</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 md:w-56 md:h-56 bg-yellow-300 rounded-full p-2">
            <img
              src="/images/chef1.png"
              alt="Person 1"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="text-center mt-4 mb-6">
            <p className="text-lg font-bold text-white font-spartan">Emma Delacroix</p>
            <p className="text-sm text-white font-alegreya">Pastry Chef</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 md:w-56 md:h-56 bg-purple-300 rounded-lg p-2">
            <img
              src="/images/chef2.jpeg"
              alt="Person 4"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="text-center mt-4 mb-6">
            <p className="text-lg font-bold text-white font-spartan">Sophia Rivera </p>
            <p className="text-sm text-white font-alegreya">Barista</p>
          </div>
        </div>


        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 md:w-56 md:h-56 bg-red-300 rounded-full p-2">
            <img
              src="/images/chef3.png"
              alt="Person 3"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="text-center mt-4 mb-6">
            <p className="text-lg font-bold text-white font-spartan">Lily Tanaka</p>
            <p className="text-sm text-white font-alegreya">Savory Chef</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 md:w-56 md:h-56 bg-orange-300 rounded-lg p-2">
            <img
              src="/images/newchef.png"
              alt="Person 4"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="text-center mt-4 mb-4">
            <p className="text-lg font-bold text-white font-spartan">Rosalia Baina</p>
            <p className="text-sm text-white font-alegreya">Culinary Consultant</p>
          </div>
        </div>
      </div>
      </div>
      <TestimonialCarousel />
      </motion.div>
    </div>
  );
};

export default About;