import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

const Faq = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("faq-container");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} px-8 py-12 transition-all`}>
      <div className="container mx-auto">
        <h2
          id="faq-container"
          className={`text-3xl font-bold text-center mb-8 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { question: "How do I create an assignment?", answer: "Navigate to the 'Create Assignment' page after logging in, and fill out the form with the assignment details." },
            { question: "Can I evaluate my own assignments?", answer: "No, you can only evaluate assignments submitted by your friends." },
            { question: "Is this platform free to use?", answer: "Yes, the Group Study platform is completely free for all users." }
          ].map((faq, index) => (
            <div
              key={index}
              className={`border p-4 rounded-lg transition-all duration-1000 ease-out delay-${index * 200} ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${isDarkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-800"} hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white`}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-500 hover:text-white">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
