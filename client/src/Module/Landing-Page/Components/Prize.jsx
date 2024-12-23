import React, { useState } from "react";
import { LuMonitor } from "react-icons/lu";
import { LuSchool } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import RegisterForm from "./RegisterForm";

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

  const [isDialogOpen, setIsDialogOpen] = useState({
    open: false,
    index: null,
    data: null,
  });

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
                  onClick={() => {
                    setIsDialogOpen({
                      open: true,
                      index,
                      data: option,
                    });
                  }}
                >
                  Book {option.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {isDialogOpen.open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-transparent rounded-lg p-6 relative">
              <button
                className="absolute top-7 right-9 text-red-500 hover:text-gray-700 text-2xl"
                onClick={() => setIsDialogOpen({ open: false, index: null })}
              >
                &times;
              </button>
              <RegisterForm
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Prize;
