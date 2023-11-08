import React, { useState } from "react";
import './collapse.scss';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />

const Collapse = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="collapse">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className={isExpanded ? "btn btn-primary" : "btn btn-secondary"}
      >
        <i className="fas fa-chevron-up"></i> <h3>{title}</h3>
      </button>
      {isExpanded && <p>{description}</p>}

    </div>
  );
};

export default Collapse;
