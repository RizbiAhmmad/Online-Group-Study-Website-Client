import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ThemeContext } from "../provider/ThemeProvider"; // Import the theme context

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const { isDarkMode } = useContext(ThemeContext); // Get dark mode state

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className={`${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"} px-8 py-4 transition-all duration-300`}>
      <h2 className="text-3xl font-semibold text-center mb-6">What Our Students Say</h2>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className={`flex flex-col items-center mx-10 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} p-6 rounded-lg shadow-lg`}>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="py-4 text-center">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
