import React from "react";
import Button from "./Button";

const Drawer = ({ children, isOpen, onClose }) => {
  return (
    <div className="md:hidden">
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ease-in-out"
          onClick={() => onClose()}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto w-full md:w-96 bg-white rounded-t-3xl md:rounded-none shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 md:translate-x-0"
            : "translate-y-full md:translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-end items-center mb-6">
            <button
              className="absolute top-7 right-9 text-red-500 hover:text-gray-700 text-2xl"
              onClick={() => onClose()}
            >
              &times;
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
