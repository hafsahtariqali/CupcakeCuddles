import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#E5AA70] text-beige">
      <div className="container mx-auto py-10 px-5 md:px-20">
        <div className="flex flex-wrap justify-between mb-8 ml-4 sm:ml-0">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-[#482113] text-2xl font-bold relative mb-6">
              Site Navigation
              <span className="absolute bottom-[-10px] left-0 w-16 h-0.5 bg-black"></span>
            </h4>
            <ul className="list-none">
              <li className="py-2">
                <a href="/" className="text-white/80 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li className="py-2">
                <a href="/menu" className="text-white/80 hover:text-white transition-colors duration-300">Menu</a>
              </li>
              <li className="py-2">
                <a href="/aboutus" className="text-white/80 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li className="py-2">
                <a href="/contact" className="text-white/80 hover:text-whitetransition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-[#482113] text-2xl font-bold relative mb-6">
              Our Location
              <span className="absolute bottom-[-10px] left-0 w-16 h-0.5 bg-black"></span>
            </h4>
            <iframe
              className="w-sm h-72 border-2 border-[#482113] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.04300184884!2d-74.4104873229232!3d40.695050575451326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3baaaaaaa014f%3A0xcc926d59e147b6dc!2sFloral%20Ave%2C%20New%20Providence%2C%20NJ%2007974%2C%20USA!5e0!3m2!1sen!2s!4v1710224340834!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full md:w-1/3">
            <h4 className="text-[#482113] text-2xl font-bold relative mb-6 mr-8">
              Our Newsletter
              <span className="absolute bottom-[-10px] left-0 w-16 h-0.5 bg-black"></span>
            </h4>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="block w-full mb-4 px-3 py-2 border border-black rounded-lg text-black font-serif"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="block w-full mb-4 px-3 py-2 border border-black rounded-lg text-black font-serif"
              />
              <input
                type="submit"
                value="Submit"
                className="block w-full px-3 py-2 bg-[#66311E] text-white font-spartan font-bold rounded-lg cursor-pointer hover:bg-[#4A0404]"
              />
            </form>
          </div>
        </div>

        <hr className="opacity-70 mb-4" />

        <div className="flex flex-wrap justify-between items-center">
          <div className="text-white font-alegreya">
            <p>&#169; 2024 Cupcake Cuddles</p>
          </div>
          <div className="flex justify-center">
            <a href='https://github.com/hafsahtariqali/CupcakeCuddles.git'>
          <Github size={20} color='#fff' />
           </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
