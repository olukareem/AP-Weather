import React from "react";
import "./date.style.css";

const DateTime = (props) => {
  return (
    <div className="flexbox-date-container text-light">
    {props.date ? (<div className="Push">
      <span className="flexbox-Date">{props.date}
        {/* <p >{props.date}</p> */}

      </span>
        <span className="ClockDisplay">{props.clock} {props.locale_time}</span>
      {/* <p >{props.clock} {props.locale_time}</p> */}
</div>) : null}
    </div>
  );
};



export default DateTime;
