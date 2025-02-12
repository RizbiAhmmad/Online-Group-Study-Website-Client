import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ThemeContext } from "../provider/ThemeProvider";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section
      className={`py-16 px-8 transition-all duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 animate-fade-in">
          What Our Students Say ✨
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Hear from students who have taken their learning to the next level with our platform.
        </p>

        <Swiper
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="mySwiper max-w-4xl mx-auto pb-10"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div
                className={`relative flex flex-col items-center text-center p-10 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 ${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-700 text-white"
                    : "bg-white border border-gray-300 text-gray-900"
                }`}
              >
                {/* Name Badge - Now Positioned Properly */}
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-md mb-4">
                  <span className="text-white text-2xl font-bold">
                    {review.name[0]}
                  </span>
                </div>

                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <p className="py-6 text-lg italic text-gray-400">
                  "{review.details}"
                </p>
                <h3 className="text-xl font-semibold text-teal-400">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
