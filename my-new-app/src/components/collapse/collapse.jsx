import React, { useState } from "react";

const Colapse = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className={isExpanded ? "btn btn-primary" : "btn btn-secondary"}
      >
      {isExpanded && <h3>{children}</h3>}
      </button>
    </div>
  );
};

export default Colapse;
