import React, { useEffect, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

const LearningPoints = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const view = window.innerWidth > 1024 ? 2 : window.innerWidth > 768 ? 3 : 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length / view - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length / view - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length / view - 1 : prevIndex - 1
    );
  };

  const reviews = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: i,
      rating: 5,
      text: "Great place to learn guitar from basics to advance. The instructors are patient and knowledgeable.",
      date: "2 months ago",
      ownerResponse:
        "Thank you for your kind words! We're glad you're enjoying your lessons. 😊",
    }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 p-6 md:p-8 lg:p-12">
      {/* Learning Points Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 tracking-tight text-center">
          Learning points
        </h2>
        <div className="px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="group bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-700">
                    Guitar Basics
                  </h3>
                </div>
                <div className="h-1 w-full bg-red-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-600 rounded-full transition-all duration-500 ease-out group-hover:w-full"
                    style={{ width: `${(i + 1) * 20}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section>
        <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            What Our Students Say
          </h2>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AiOutlineMessage className="w-8 h-8 text-red-500" />
                          <h3 className="font-semibold text-lg text-gray-800">
                            Student Review
                          </h3>
                        </div>
                        <div className="flex">
                          {Array(review.rating)
                            .fill(null)
                            .map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        &ldquo;{review.text}&rdquo;
                      </p>
                      <div className="text-sm text-gray-500">
                        <span>{review.date}</span>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="font-medium mb-1 text-red-600">
                          Response from the owner
                        </p>
                        <p className="text-gray-600">{review.ownerResponse}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Previous review"
            >
              <FaCaretLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Next review"
            >
              <FaCaretRight className="w-6 h-6" />
            </button>

            {/* Dots navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(view)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-red-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPoints;
