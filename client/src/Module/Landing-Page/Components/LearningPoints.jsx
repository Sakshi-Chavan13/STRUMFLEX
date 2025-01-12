import React, { useEffect, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

const reviews = [
  {
    id: 1,
    text: "Great place to learn guitar from basics to advance. The instructors are patient and knowledgeable.",
    date: "2 months ago",
    ownerResponse:
      "Thank you for your kind words! We're glad you're enjoying your lessons. 😊",
  },
  {
    id: 2,
    text: "Excellent guitar lessons! The instructors really know their stuff and make learning fun.",
    date: "1 month ago",
    ownerResponse:
      "We're thrilled to hear you're enjoying the lessons. Keep up the great work! 🎸",
  },
  {
    id: 3,
    text: "I've learned so much in such a short time. Highly recommend for anyone wanting to learn guitar.",
    date: "3 weeks ago",
    ownerResponse:
      "Thank you for the recommendation! We're proud of your progress. 🌟",
  },
  {
    id: 4,
    text: "The instructors are very patient and explain things clearly. Great for beginners!",
    date: "2 weeks ago",
    ownerResponse:
      "We're glad you find our teaching style helpful. Keep strumming! 🎶",
  },
];

const cards = [
  "Basic Guitar Lessons",
  "Songs Lessons",
  "Staff Notations",
  "Professional Techniques",
];

const LearningPoints = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="min-h-screen bg-gradient-to-b p-6 md:p-8 lg:p-12">
      {/* Learning Points Section */}
      <section id="Learning" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 tracking-tight text-center">
          Learning points
        </h2>
        <div className="md:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-white rounded-lg border border-slate-200 hover:shadow-lg hover:shadow-red-300 transition-all duration-300"
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
                  <h3 className="font-semibold text-slate-700">{card}</h3>
                </div>
                <div className="h-1 w-full bg-red-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-600 rounded-full transition-all duration-500 ease-out group-hover:w-full"
                    style={{ width: `${(i + 1) * 25}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-slate-800 tracking-tight text-center">
          Reviews
        </h2>
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`flex gap-4 w-full flex-shrink-0 ${
                    slideIndex !== currentSlide ? "opacity-0" : ""
                  }`}
                >
                  {reviews
                    .slice(slideIndex, (slideIndex + 1) * slidesPerView)
                    .map((review) => (
                      <div
                        key={review.id}
                        className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 transform transition-all duration-500 hover:scale-105`}
                      >
                        <div className="bg-white z-10 rounded-lg shadow-lg p-4 sm:p-6 transition-shadow duration-300 hover:shadow-xl h-full">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 text-gray-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                              </div>
                              <span className="font-semibold text-base sm:text-lg text-gray-800">
                                Student Review
                              </span>
                            </div>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <blockquote className="text-gray-600 italic mb-4 text-sm sm:text-base">
                            "{review.text}"
                          </blockquote>
                          <div className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                            {review.date}
                          </div>
                          <div className="border-t border-gray-200 pt-4">
                            <h4 className="text-red-500 font-medium mb-2 text-sm sm:text-base">
                              Response from the owner
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base">
                              {review.ownerResponse}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 text-gray-800 font-bold py-2 px-3 sm:px-4 rounded-r transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 text-gray-800 font-bold py-2 px-3 sm:px-4 rounded-l transition-all duration-300"
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-red-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPoints;
