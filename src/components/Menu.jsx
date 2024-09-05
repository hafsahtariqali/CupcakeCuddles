import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Morning Bites",
    items: [
      {
        name: "Sunrise Bliss Sandwich",
        price: "$5",
        description: "A harmonious blend of fluffy eggs, melted cheese, and ripe tomatoes on freshly baked bread.",
        img: "/images/breadsandwich1.jpeg",
      },
      {
        name: "Peppy Cheese Bread",
        price: "$5",
        description: "Featuring savory pepperoni slices layered with gooey melted cheese on freshly baked bread, the perfect breaky bite.",
        img: "/images/breadsandwich2.jpeg",
      },
      {
        name: "Choco-Delight Cookies",
        price: "$5",
        description: "Filled with gooey chocolate chips, each bite is a heavenly blend of rich chocolate and buttery goodness.",
        img: "/images/cookies.jpeg",
      },
      {
        name: "Tata's Treat Macarons",
        price: "$10",
        description: "Experience the perfect balance of delicate shells, and rich luscious chocolate and caramel fillings with nuts.",
        img: "/images/tatamacarons.jpeg",
      },
    ],
  },
  {
    category: "Lunchtime Nibbles",
    items: [
      {
        name: "Carrot Crunch Cupcake",
        price: "$10",
        description: "A moist and flavorful treat packed with freshly grated carrots, aromatic spices, and sweetness.",
        img: "/images/carrotcupcake.jpeg",
      },
      {
        name: "Berry Bliss Cupcake",
        price: "$10",
        description: "Featuring a fluffy vanilla base infused with hints of sweetness and topped with a luscious strawberry frosting.",
        img: "/images/strawberrycupcake.jpeg",
      },
      {
        name: "Snowman's Sip Coffee",
        price: "$15",
        description: "A plain coffee delight where marshmallows melt into a rich brew like snowmen in a winter wonderland.",
        img: "/images/coffeeplain.jpeg",
      },
      {
        name: "Whipped Sip Coffee",
        price: "$15",
        description: "Featuring a velvety smooth dalgona topping atop a rich espresso base, enjoy the coffee flavors.",
        img: "/images/dalogonacoffee.jpeg",
      },
    ],
  },
  {
    category: "Dinner Delights",
    items: [
      {
        name: "Choco Dream Muffin",
        price: "$12",
        description: "A decadent treat bursting with rich chocolate flavor in every bite, creating a heaven for chocolate lovers.",
        img: "/images/muffin.jpeg",
      },
      {
        name: "Choc-Vanilla Duo",
        price: "$12",
        description: "A heavenly pairing of velvety chocolate pudding and creamy vanilla ice cream that will remind you of your duo.",
        img: "/images/pudding.jpeg",
      },
      {
        name: "Tropical Sunshine",
        price: "$15",
        description: "Indulge in the luscious mango filling and zesty lemon glaze with mango slices atop and enjoy the sun blazing",
        img: "/images/tart.jpeg",
      },
      {
        name: "Cocoa Bliss Pancake",
        price: "$15",
        description: "Fluffy pancakes infused with rich cocoa, layered with velvety chocolate sauce and whipped cream.",
        img: "/images/pancake.jpeg",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div id='menu' className="text-center mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <h1 className="text-center text-5xl font-extrabold font-spartan text-[#482113] tracking-tight mt-8">OUR MENU</h1>
        <p className="text-center sm:text-lg text-md font-light font-alegreya text-[#0C090A] mt-2 mb-10">
          Indulge in Sweet Symphony: Our Cupcake Wonderland!
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-around m-8">
        {menuItems.map((menuCategory, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full md:w-full lg:w-1/3 p-4"
          >
            <h4 className="text-3xl font-bold font-spartan underline tracking-tighter text-left text-[#482113] mb-10">
              {menuCategory.category}
            </h4>

            {menuCategory.items.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center mb-8 sm:mr-8 mr-2"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 p-2 mr-4"
                />
                <div>
                  <h5 className="sm:text-lg text-md font-bold text-[#482113] text-left mb-2">
                    {item.name} <span className="float-right text-[#482113]">{item.price}</span>
                  </h5>
                  <p className="text-sm font-alegreya text-justify mr-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
