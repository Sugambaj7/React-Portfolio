import React from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  return (
    <div className="ml-12 mr-2 flex flex-col justify-center sm:ml-24">
      <div>
        <h3 className="heading text-2xl font-bold text-center md:text-3xl lg:text-4xl ibm-plex-mono-bold">
          Get In Touch
        </h3>
        <p className="my-text ibm-plex-sans-regular mt-2 block text-center text-sm sm:text-md lg:text-lg lg:mt-4">
          "Don't like forms? Send me email 👋"
        </p>
      </div>
      <div className="mt-8 mb-14 flex flex-col sm:items-center">
        <form
          className="ibm-plex-sans-regular p-2 flex flex-col items-center sm:w-[50%] md:w-[60%] lg:w-[60%]"
          action=""
        >
          <div className="w-[90%] flex flex-col lg:flex-row lg:h-12">
            <input
              className="form-inputs p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg flex-1"
              type="text"
              placeholder="Insert Your Name"
              required
            />
            <input
              className="form-inputs mt-3 p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg flex-1 lg:ml-2 lg:mt-0"
              type="text"
              placeholder="Insert Your Email Address"
              required
            />
          </div>
          <div className="w-[90%] mt-3 lg:h-12">
            <input
              className="form-inputs w-full p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg"
              type="text"
              placeholder="Insert Your Subject"
              required
            />
          </div>
          <div className="w-[90%] mt-3 ">
            <textarea
              className="form-inputs w-full p-2 rounded-br-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg"
              placeholder="Write Your Message"
              rows={5}
              required
            ></textarea>
          </div>
          <div className="w-[90%] mt-5 flex justify-center">
            <button className="mybutton ibm-plex-sans-regular px-5 py-2 rounded-2xl">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
