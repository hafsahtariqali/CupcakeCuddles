import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    message:
      "Cupcake Cuddles is pure magic! Every bite of their cupcakes feels like a warm hug, and their coffee? Absolutely divine! The cozy atmosphere is perfect for unwinding with friends. Can't wait to visit again!",
    name: "Emma P.",
  },
  {
    message:
      "I walked into Cupcake Cuddles and fell in love with the charming vibe. Their cakes are a dream come true, and the staff is so friendly! I had the best caramel latte ever. My new favorite spot for sure!",
    name: "Sarah L.",
  },
  {
    message:
      "I can’t get enough of Cupcake Cuddles! The cupcakes are moist, flavorful, and beyond cute! The cafe’s adorable aesthetic adds to the magic. It’s my go-to place for a sweet escape!",
    name: "Hannah J.",
  },
  {
    message:
      "Cupcake Cuddles is a slice of heaven! Their cupcakes are delightful, and their coffee is perfection. The cafe’s ambiance is cozy and a spot to unwind and indulge in sweetness!",
    name: "Lucy M.",
  },
  {
    message:
      "From the decor to the desserts, Cupcake Cuddles is irresistibly adorable! The cupcakes are as delicious as they are pretty. Such a lovely place to relax and enjoy some sweet moments.",
    name: "Meghan D.",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,  // Show 3 slides at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,  // Show 2 slides at medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Show 1 slide at small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section py-10">
      <div className="second-heading text-center mb-10">
        <h1 className="text-3xl sm:text-4xl tracking-tighter font-bold text-[#482113]">Happy Sips & Stories</h1>
      </div>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="client-msg bg-[#EADDCA] p-8 rounded-lg shadow-md text-[#482113]">
                <p className="text-justify mb-6 relative p-6">
                  <span className="absolute text-3xl font-bold text-[#482113] -top-2 left-4">“</span>
                  {testimonial.message}
                  <span className="absolute text-3xl font-bold text-[#482113] -bottom-2 right-4">”</span>
                </p>
                <div className="client-details text-center mt-6">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
