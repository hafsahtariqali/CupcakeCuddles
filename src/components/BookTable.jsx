import React, { useState } from "react";
import { motion } from "framer-motion";

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: "1",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table booked successfully!");
  };

  return (
    <div id='bookatable' className="flex flex-col items-center justify-center mt-20 mb-6 bg-wheat py-10 px-4">
      <div
        className="bg-[#CC9966] shadow-lg rounded-lg grid lg:grid-cols-2 grid-cols-1 w-full max-w-6xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section: Cupcake Cuddles Info */}
        <div
          className="p-10 border-r border-dashed border-[#FAD6A5] flex flex-col justify-center text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold font-spartan text-white mb-6">
            'Cupcake Cuddles'<br></br> Shining Hours
          </h2>
          <p className="text-2xl font-alegreya font-bold text-[#4A0404] mb-2">Monday - Friday</p>
          <p className="text-lg text-[#483C32] mb-4">9:00 AM - 9:00 PM</p>
          <p className="text-2xl font-alegreya font-bold text-[#4A0404] mb-2">Saturday - Sunday</p>
          <p className="text-lg text-[#483C32] mb-4">10:00 AM - 11:00 PM</p>
          <hr className="my-4 border-[#FAD6A5]" />
          <h4 className="text-2xl font-light font-spartan text-white mt-4">
            Dial Up Some Cupcake Magic at <br />
            (123) 456 789
          </h4>
        </div>

        {/* Right Section: Form */}
        <div
          className="p-10 flex flex-col justify-center bg-[#F5DEB3]"
        >
          <h2 className="text-4xl font-extrabold font-spartan text-[#4A0404] text-center mb-8">
            BOOK A TABLE
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div
              className="flex justify-between items-center"
            >
              <label className="text-md font-roboto font-bold">Your Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="py-2 px-4 border border-gray-300 rounded-lg w-2/3"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div
              className="flex justify-between items-center"
            >
              <label className="text-md font-roboto font-bold">Your Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="py-2 px-4 border border-gray-300 rounded-lg w-2/3"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div
              className="flex justify-between items-center"
            >
              <label className="text-md font-roboto font-bold">Date:</label>
              <input
                type="date"
                name="date"
                className="py-2 px-4 border border-gray-300 rounded-lg w-2/3"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div
              className="flex justify-between items-center"
            >
              <label className="text-md font-roboto font-bold">Time:</label>
              <input
                type="time"
                name="time"
                className="py-2 px-4 border border-gray-300 rounded-lg w-2/3"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div
              className="flex justify-between items-center"
            >
              <label className="text-md font-roboto font-bold">Total Cupcake Crew?</label>
              <select
                name="people"
                className="py-2 px-4 border border-gray-300 rounded-lg w-2/3"
                value={formData.people}
                onChange={handleChange}
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="5+">5+ People</option>
              </select>
            </div>

            <motion.button
              type="submit"
              className="py-2 px-6 bg-[#66311E] text-white font-spartan text-lg rounded-lg hover:bg-[#4A0404] transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
        </div>

      {/* Extra Info */}
      <motion.div
        className="mt-12 text-center w-full max-w-4xl px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-lg font-semibold text-[#482113]">
          NOTE: To Book the Entire Cafe, Kindly Complete the Booking At Least ONE WEEK PRIOR.
        </h2>
      </motion.div>
    </div>
  );
};

export default BookTable;
