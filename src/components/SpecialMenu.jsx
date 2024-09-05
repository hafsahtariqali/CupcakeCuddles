import React from 'react';
import { motion } from 'framer-motion';

// Define an array for the menu items
const menuItems = [
  {
    id: 1,
    src: '/images/menu1.png',
    alt: 'menu1',
    title: 'VANILLA BUNNY BLISS',
    description: 'Indulge in our Vanilla Bunny Bliss Cupcake, where moist carrot cake meets vanilla frosting for a delightful dance of flavors.',
    price: '$2.99',
  },
  {
    id: 2,
    src: '/images/menu3.png',
    alt: 'menu3',
    title: 'STRAWBERRY LOVE',
    description: 'Savor the sweet embrace of our Strawberry Love, a delightful fusion of vanilla and luscious strawberries in every bite.',
    price: '$2.99',
  },
  {
    id: 3,
    src: '/images/menu2.png',
    alt: 'menu2',
    title: 'LEMONY LOVE MUFFIN',
    description: 'Lemony Love Muffin is a zesty lemon cupcake topped with edible flowers, offering a burst of citrus flavors.',
    price: '$2.99',
  },
];

const SpecialMenu = () => {
  return (
    <section className="bg-[#FFF5EC] flex flex-col items-center py-8 pb-10">
      <h1 className="text-center text-5xl font-extrabold font-spartan text-[#482113] tracking-tight mt-8">
        THIS WEEK'S CUDDLES
      </h1>
      <p className="text-center text-lg font-light font-alegreya text-[#0C090A] mt-2 mb-8">
        A sweet taste of our magic menu
      </p>
      <div className="flex flex-wrap justify-center">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            className="text-center mx-6 my-6 max-w-[330px] bg-white rounded-[30px] shadow-lg py-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
          >
            <img
              className="h-[300px] w-auto mx-auto mb-4 rounded-[20px]"
              src={item.src}
              alt={item.alt}
            />
            <h3 className="text-[20px] font-bold text-left ml-4 font-spartan text-[#482113] mt-4">
              {item.title}
            </h3>
            <p className="text-base text-[14px] font-alegreya text-left font-light text-[#0C090A] mt-2 ml-4 mr-4">
              {item.description}
            </p>
            <p className="text-[17px] font-spartan text-left font-bold text-[#0C090A] mt-2 ml-4 mr-4">
              {item.price}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialMenu;
