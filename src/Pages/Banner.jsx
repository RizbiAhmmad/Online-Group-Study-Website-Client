import React from "react";

const Banner = () => {
  return (
    <div>
      {/* Banner Section */}
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
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
