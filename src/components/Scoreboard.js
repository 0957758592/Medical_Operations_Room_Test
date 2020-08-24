import React from "react";
import PropTypes from "prop-types";

function Scoreboard({ value, type }) {
  return (
    <div className="flex-1 max-w-sm rounded overflow-hidden shadow-lg bg-gray-400 m-10">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{type}</div>
        <p className="text-gray-700 text-base">{value}</p>
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string
};

export default Scoreboard;
