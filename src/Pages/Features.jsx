import React from 'react';

const Features = () => {
    return (
        <div>
             
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Create Assignments</h3>
              <p className="text-gray-600">
                Easily create assignments with a user-friendly interface and share them with your group.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Evaluate Work</h3>
              <p className="text-gray-600">
                Grade your friends’ assignments and provide valuable feedback to help them improve.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Collaborate Seamlessly</h3>
              <p className="text-gray-600">
                Work together in a shared environment to achieve better learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Features;