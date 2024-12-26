import React, { useEffect, useState } from "react";

const Faq = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('faq-container');
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2
            id="faq-container"
            className={`text-3xl font-bold text-center mb-8 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div
              className={`border border-gray-200 p-4 rounded-lg transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white`}
            >
              <h3 className="text-lg font-semibold">How do I create an assignment?</h3>
              <p className="text-gray-600">
                Navigate to the "Create Assignment" page after logging in, and fill out the form with the assignment details.
              </p>
            </div>
            <div
              className={`border border-gray-200 p-4 rounded-lg transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white`}
            >
              <h3 className="text-lg font-semibold">Can I evaluate my own assignments?</h3>
              <p className="text-gray-600">
                No, you can only evaluate assignments submitted by your friends.
              </p>
            </div>
            <div
              className={`border border-gray-200 p-4 rounded-lg transition-all duration-1000 ease-out delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white`}
            >
              <h3 className="text-lg font-semibold">Is this platform free to use?</h3>
              <p className="text-gray-600">
                Yes, the Group Study platform is completely free for all users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
