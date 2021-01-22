import React from "react";
import "./weather.style.css";
import "./animated.style.css";
import "./weather-icons-master 2/css/weather-icons.css"
import "./weather-icons-master 2/css/weather-icons.css";
import "./weather-icons-master 2/css/weather-icons.min.css";
import "./weather-icons-master 2/css/weather-icons-wind.css";
import "./weather-icons-master 2/css/weather-icons-wind.min.css";
import "./weather-underground-icons/dist/wu-icons-style.css";

const Weather = (props) => {
  return (
    <div className="flexbox-container text-light">
      {props.city ? (
        <div className="currentCity">
          {/* <span className="currentCondition"> */}

          {/* <p className="Currently">Right Now</p> */}

          <div className="conditionContainer">
            <div className="flexboxTemp">
              {props.temp_fahrenheit ? (
                <h1 className="flexbox-tempNum">
                  {props.temp_fahrenheit}
                  <i className={`${props.f_icon}`} />
                  {/* <p className="Currently">Right Now</p> */}
                </h1>
              ) : null}

              {/** Display low/high/temp*/}
              {/**celsius option*/}
              {/* {lowhighTemp(props.temp_minC, props.temp_maxC)} */}
              {lowhighTemp(props.temp_minF, props.temp_maxF)}
            </div>
            <div className="flexbox-icon-descrip">
              {/* <i className={`${props.weatherIcon}`}/> */}
              <i className={`${props.weatherIcon}`} />
              <h4 className="flexbox-description">{props.description}</h4>
            </div>
          </div>
          <br></br>
         
        </div>
      ) : null
      }
    </div>
  );
};

function lowhighTemp(low, high) {
  if (low && high) {
    return (
      <div className="lowHigh">
        <h3>
          <span className="lowdeg">{low}&deg;</span>
          <span className="highdeg">{high}&deg;</span>
        </h3>
        <h4 className="highLowText">
          <span className="lowText">Low</span>
          <span className="highText">High</span>
        </h4>
      </div>
    );
  }
}

export default Weather;
