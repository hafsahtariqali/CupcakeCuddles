import React from "react";

const Hero = () => {
  return (
    <section className="flex h-[90vh] flex-col md:flex-row w-full mt-10">
      <div
        className="relative flex-1 flex flex-col justify-center items-center bg-cover bg-center p-5"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }} // Use public folder path
      >
        <h1 className="font-spartan font-extrabold text-[70px] leading-tight text-[#482113] text-center tracking-tighter">
          cupcake cuddles.
        </h1>
        <p className="font-alegreya font-light text-[17px] text-beige/70 text-center">
          1445 Floral Ave, New York City, United States
        </p>
        <div className="absolute inset-0 bg-black/5"></div>
      </div>
      <div
        className="flex-1 bg-cover bg-center p-5"
        style={{ backgroundImage: "url('/images/bg2.png')" }} // Use public folder path
      ></div>
    </section>
  );
};

export default Hero;
