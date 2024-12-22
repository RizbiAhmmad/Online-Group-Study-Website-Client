import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">How do I create an assignment?</h3>
              <p className="text-gray-600">
                Navigate to the "Create Assignment" page after logging in, and fill out the form with the assignment details.
              </p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Can I evaluate my own assignments?</h3>
              <p className="text-gray-600">
                No, you can only evaluate assignments submitted by your friends.
              </p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
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