import React from "react";
import "./styles/centerArrow.css";

function centerarrow(props) {
  return (
    <div>
      <div className="center-arrow">
        <span className="center-arrow-title">click me</span>
        <a href={`#${props.secId}`} className="fas fa-angle-down"></a>
      </div>
    </div>
  );
}

export default centerarrow;
