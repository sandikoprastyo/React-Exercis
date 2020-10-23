import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1>Contact</h1>
        <form action="#" className="form bg-white p-6 my-10 relative">
          <div className="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5">
            <i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-40">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                class="phone w-6 h-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </i>
          </div>
          <h3 className="text-2xl text-gray-900 font-semibold">
            Let us call you!
          </h3>
          <p className="text-gray-600"> To help you choose your property</p>
          <div className="flex space-x-5 mt-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="border p-2  w-1/2"
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your Number"
              className="border p-2 w-1/2 "
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="border p-2 w-full mt-3"
          />
          <textarea
            name="comment"
            id="comment"
            cols="10"
            rows="3"
            placeholder="Tell us about desired property"
            className="border p-2 mt-3 w-full"
          ></textarea>
          <p className="font-bold text-sm mt-3">GDPR Agreement *</p>
          <div className="flex items-baseline space-x-2 mt-2">
            <input type="checkbox" name="" id="" className="inline-block" />
            <p className="text-gray-600 text-sm">
              I consent to having this website store my submitted information so
              they can respond to my inquiry.
            </p>
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
