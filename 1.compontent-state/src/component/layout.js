import React from "react";
import "./index.css";

const layout = (props) => {
  return (
    <div className="layout">
      <div className="header">
        <h2>{props.title}</h2>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default layout;
