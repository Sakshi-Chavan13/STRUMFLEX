import React from "react";
import GuitarLessonForm from "./Form";
import FormImage from "../../../assets/FormImage.jpg";

const FormMain = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 mix-blend-multiply z-10" />
              <img
                src={FormImage}
                alt="Online guitar lesson"
                className="object-cover max-md:h-full w-full md:h-[34rem]"
                width={1200}
                height={800}
                priority
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h2 className="text-2xl font-bold mb-2">
                  Start Your Musical Journey
                </h2>
                <p className="text-sm text-gray-200">
                  Join our community of passionate musicians and learn from
                  expert instructors
                </p>
              </div>
            </div>
            <GuitarLessonForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMain;
