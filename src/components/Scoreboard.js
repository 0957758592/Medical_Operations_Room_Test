import React from "react";
import PropTypes from "prop-types";

function Scoreboard({ value, type }) {
  return (
    <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg bg-gray-400 m-10">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{type}</div>
        <p class="text-gray-700 text-base">{value}</p>
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Scoreboard;
