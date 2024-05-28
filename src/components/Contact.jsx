import React, { useState } from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleButtonClick = (event) => {
    event.preventDefault();
    setIsVisible(true);
  };
  return (
    <div className="ml-12 mr-2 flex flex-col justify-center relative sm:ml-24">
      {isVisible && (
        <div className="maintenance-alert shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-red-400 flex absolute top-2 right-2  rounded sm:w-[60%] md:w-[50%] lg:w-[35%] lg:top-0 md:right-4 xl:w-[27%]">
          <div className="rounded ml-2 mb-2 mr-0.5 h-full flex items-center flex-1">
            <p className="mero-text text-white text-sm sm:text-lg md:text-lg lg:text-lg">
              The site is under maintenance !!!
            </p>
          </div>
          <div
            className="ml-1 mr-2 mt-1 flex w-[10%] h-[full] "
            onClick={() => setIsVisible(false)}
          >
            <div className="first-line"></div>
            <div className="second-line"></div>
          </div>
        </div>
      )}
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
            />
            <input
              className="form-inputs mt-3 p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg flex-1 lg:ml-2 lg:mt-0"
              type="text"
              placeholder="Insert Your Email Address"
            />
          </div>
          <div className="w-[90%] mt-3 lg:h-12">
            <input
              className="form-inputs w-full p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg"
              type="text"
              placeholder="Insert Your Subject"
            />
          </div>
          <div className="w-[90%] mt-3 ">
            <textarea
              className="form-inputs w-full p-2 rounded-br-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg"
              placeholder="Write Your Message"
              rows={5}
            ></textarea>
          </div>
          <div className="w-[90%] mt-5 flex justify-center">
            <button
              className="mybutton ibm-plex-sans-regular px-5 py-2 rounded-2xl"
              onClick={handleButtonClick}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
