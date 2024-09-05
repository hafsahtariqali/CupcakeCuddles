import React from "react";
import ScrollingBanner from './ScrollingBanner'; 

const Banner = () => {
  return (
    <section className="bg-[#482113] text-white flex justify-center">
       <ScrollingBanner 
        text="cupcakes. coffee. cuddles.     cupcakes. coffee. cuddles." 
        className="text-5xl font-spartan font-bold text-white py-8 flex justify-center"
      />
    </section>
  );
};

export default Banner;
