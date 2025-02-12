import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
     
      <section
        className="bg-cover bg-center text-white h-screen"
        style={{
          backgroundImage: "url('https://oed.com.ph/wp-content/uploads/2019/05/group-study.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to Group Study
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Collaborate, Learn, and Achieve Together with Your Friends.
            </p>
           <Link to={'/assignments'}>
           <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-lg hover:bg-teal-600">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
