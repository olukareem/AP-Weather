import React from "react";
import "./title.style.css";

const Title = (props) => {
  return (
    <div className="title-container text-light">
      {props.city ? (
        <div className="City">
          <h1>{props.city}</h1>
        </div>
      ) : (
        <h1 className="Title">Apollo Weather</h1>
      )}
    </div>
  );
};

export default Title;
