import React from "react";

function DetailDisplay({ detail, value }) {
  return (
    <p className="dark:text-gray-300 text-lg">
      <span className="dark:text-white">{detail}: </span>
      {value}
    </p>
  );
}

export default DetailDisplay;
