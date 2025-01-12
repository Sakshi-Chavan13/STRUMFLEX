import React from "react";

const GlobalModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 max-lg:hidden">
            <div className="bg-transparent rounded-lg p-6 relative">
              <button
                className="absolute top-7 right-9 text-red-500 hover:text-gray-700 text-2xl"
                onClick={() => onClose()}
              >
                &times;
              </button>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GlobalModal;
