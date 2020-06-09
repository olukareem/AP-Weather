import React from "react";
import "./weather.style.css";
import "./animated.style.css";

const Weather = (props) => {
  return (
    <div className="flexbox-container text-light">
      {props.city ? (
        <div className="currentCity pt-4">
          {/* <span className="currentCondition"> */}

          {/* <p className="Currently">Right Now</p> */}

          <div className="conditionContainer">
     
            {/* <h4 className="py-1">{props.description}</h4> */}
            <span className="flexboxTemp">
              {props.temp_fahrenheit ? (
                <h1 className="flexbox-tempNum">
                  {props.temp_fahrenheit}<i className={`${props.f_icon}`} />
                  {/* <p className="Currently">Right Now</p> */}
                </h1>
              ) : null}

              {/** Display low/high/temp*/}
             {/**celsius option*/}
              {/* {lowhighTemp(props.temp_minC, props.temp_maxC)} */}
              {lowhighTemp(props.temp_minF, props.temp_maxF)}
            </span>
            <div className="flexbox-icon-descrip">
              {/* <i className={`${props.weatherIcon}`}/> */}
              <i className={`${props.weatherIcon}`} />
              <h4 className="flexbox-description">{props.description}</h4>
            </div>
          </div>
          <br></br>
          <div className="SunriseSunset">
            {props.sunrise ? (
              <h4 className="sunrise">
                Sunrise: {props.sunrise}
                <i className={`wu wu-white wu-32 wu-${props.day_icon}`} />
              </h4>
            ) : null}

            {props.sunset ? (
              <h4 className="sunrise">
                Sunset: {props.sunset}
                <i className={`wu wu-white wu-32 wu-${props.night_icon}`} />
              </h4>
            ) : null}
          </div>

<div className="SunIcon">
          <div className="Sunny"></div>
          <div class="icon sunny">
            <div class="sun">
              <div class="rays"></div>
            </div>
          </div>
</div>

        </div>
        
      ) : <div className="SunIconHome"> 
      <div className="Sunny"></div>
          <div className="icon sunny">
            <div className="sun">
              <div className="rays"></div>
            </div>
          </div>
          </div>}

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
