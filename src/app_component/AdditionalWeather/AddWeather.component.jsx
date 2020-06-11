import React from "react";
import "./AddWeather.style.css";
import "../Weather/animated.style.css";
import "../Weather/weather-icons-master 2/css/weather-icons.css";
import "../Weather/weather-icons-master 2/css/weather-icons.min.css";
import "../Weather/weather-icons-master 2/css/weather-icons-wind.css";
import "../Weather/weather-icons-master 2/css/weather-icons-wind.min.css";
import "../Weather/weather-underground-icons/dist/wu-icons-style.css";

const Weather = (props) => {
  return (
    <div className="flexbox-container text-light">
      {props.city ? (
        <div className="addWeather pt-4">
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
      ) : (
        <div className="SunIconHome">
          <div className="Sunny"></div>
          <div className="icon sunny">
            <div className="sun">
              <div className="rays"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
