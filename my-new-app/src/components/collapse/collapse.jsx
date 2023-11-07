import React, { useState } from "react";
import './collapse.scss'

const Collapse = ({ title,description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className={isExpanded ? "btn btn-primary" : "btn btn-secondary"}
      >
       <h3>{title}</h3>
      </button>
      {isExpanded && <p>{description}</p>}

    </div>
  );
};

export default Collapse;
