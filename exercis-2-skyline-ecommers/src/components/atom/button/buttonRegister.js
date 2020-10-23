import React from "react";

const buttonRegister = ({ title, Loading, onClick }) => {
  if (Loading) {
    return (
      <button
        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2
            px-4 rounded-lg disable"
      >
        Loading...
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
            px-4 rounded-lg"
      >
        {title}
      </button>
    );
  }
};

export default buttonRegister;
