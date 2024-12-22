import React from "react";
import { LuMonitor } from "react-icons/lu";
import { LuSchool } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";

const Prize = () => {
  const classOptions = [
    {
      title: "Online Classes",
      description: "Virtual one-on-one sessions",
      icon: LuMonitor,
      price: 2000,
      features: [
        "Google Meet sessions",
        "Twice a week",
        "45 minutes per session",
        "Flexible scheduling",
        "Digital learning materials",
      ],
    },
    {
      title: "Offline Classes",
      description: "In-person learning experience",
      icon: LuSchool,
      price: 3500,
      features: [
        "At our Airoli location",
        "Once a week",
        "90 minutes per session",
        "Guitar provided on-site",
        "Physical learning materials",
      ],
      popular: true,
    },
    {
      title: "Personal Home Classes",
      description: "Comfort of your home",
      icon: AiOutlineHome,
      price: 4500,
      features: [
        "At your home",
        "Once a week",
        "90 minutes per session",
        "Personalized attention",
        "Customized curriculum",
      ],
    },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect learning environment that suits your needs.
            Whether online, offline, or at home, we provide comprehensive guitar
            instruction tailored to your preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {classOptions.map((option, index) => (
            <div
              key={option.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`relative group bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-red-300 transition-shadow p-6 ${
                  option.popular ? "border-2 border-red-500" : ""
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-500 text-white text-sm rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                </div>
                <div className="text-center">
                  {/* <div className="text-3xl font-bold mb-4">
                    ₹{option.price.toLocaleString()}
                    <span className="text-sm font-normal text-gray-600">
                      /month
                    </span>
                  </div> */}
                  <ul className="space-y-2 text-sm mb-6">
                    {option.features.map((feature, index) => (
                      <li
                        key={index}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        🎸 {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                  onClick={() => openDialog(option)}
                >
                  Book {option.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* {isDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeDialog}
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-semibold mb-4">
                Book {selectedOption?.title}
              </h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below to book your{" "}
                {selectedOption?.title.toLowerCase()}. We'll contact you to
                confirm the details.
              </p>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Submit Booking
                </button>
              </form>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Prize;
