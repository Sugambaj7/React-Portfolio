import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const form = useRef();

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      emailjs
        .sendForm("service_ixm44ar", "template_n8c6lwd", form.current, {
          publicKey: "_N9YVnOexULIkBbn_",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setIsVisible(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      form.current.reportValidity();
    }
  };

  return (
    <div className="ml-12 mr-2 flex flex-col justify-center relative sm:ml-24">
      {isVisible && (
        <div className="maintenance-alert shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-green-400 flex absolute top-2 right-2  rounded w-[40%] sm:w-[34%] md:w-[30%] md:right-4 lg:w-[18%] lg:top-0 ">
          <div className="rounded ml-2 mb-2 mr-0.5 h-full flex items-center flex-1">
            <p className="mero-text text-white text-sm sm:text-lg md:text-lg lg:text-lg">
              Message sent!!!
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
      <div className="mt-6">
        <h3 className="heading text-2xl font-bold text-center md:text-3xl lg:text-4xl ibm-plex-mono-bold">
          Get In Touch
        </h3>
        <p className="my-text ibm-plex-sans-regular mt-2 block text-center text-sm sm:text-md lg:text-lg lg:mt-4">
          "Don't like forms? Send me email 👋"
        </p>
      </div>
      <div className="mt-8 mb-14 flex flex-col sm:items-center">
        <form
          ref={form}
          className="ibm-plex-sans-regular p-2 flex flex-col items-center sm:w-[50%] md:w-[60%] lg:w-[60%]"
          action=""
        >
          <div className="w-[90%] flex flex-col lg:flex-row lg:h-12">
            <input
              className="form-inputs p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg flex-1"
              type="text"
              name="name"
              placeholder="Insert Your Name"
              required
            />
            <input
              className="form-inputs mt-3 p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg flex-1 lg:ml-2 lg:mt-0"
              type="text"
              name="email"
              placeholder="Insert Your Email Address"
              required
            />
          </div>
          <div className="w-[90%] mt-3 lg:h-12">
            <input
              className="form-inputs w-full p-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg"
              type="text"
              name="subject"
              placeholder="Insert Your Subject"
              required
            />
          </div>
          <div className="w-[90%] mt-3 ">
            <textarea
              className="form-inputs w-full p-2 rounded-br-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus:outline-none lg:text-lg"
              placeholder="Write Your Message"
              name="message"
              rows={5}
              required
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
