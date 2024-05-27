import React from "react";

const Contact = () => {
  return (
    <div className="ml-12 mr-2 flex flex-col justify-center sm:ml-24">
      <div>
        <h3 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">Get In Touch</h3>
        <p className="mt-2 block text-center text-sm sm:text-md lg:text-lg lg:mt-4">
          "Don't like forms? Send me email 👋"
        </p>
      </div>
      <div className="mt-8 mb-14 flex flex-col sm:items-center">
        <form
          className="p-2 flex flex-col items-center sm:w-[50%] md:w-[60%] lg:w-[60%]"
          action=""
        >
          <div className="w-[90%] flex flex-col lg:flex-row lg:h-12">
            <input
              className="p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg flex-1"
              type="text"
              placeholder="Insert Your Name"
              required
            />
            <input
              className="mt-3 p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg flex-1 lg:ml-2 lg:mt-0"
              type="text"
              placeholder="Insert Your Email Address"
              required
            />
          </div>
          <div className="w-[90%] mt-3 lg:h-12">
            <input
              className="w-full p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg"
              type="text"
              placeholder="Insert Your Subject"
              required
            />
          </div>
          <div className="w-[90%] mt-3 ">
            <textarea
              className="w-full p-2 rounded-br-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg"
              placeholder="Write Your Message"
              rows={5}
              required
            ></textarea>
          </div>
          <div className="w-[90%] mt-5 flex justify-center">
            <button className="bg-blue-400 px-5 py-2 text-white rounded-2xl">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
