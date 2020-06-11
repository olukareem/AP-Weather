import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import "/Users/Olukara/General_Assembly/sei/unit_2/week_6/Project_2/Apollo-Weather/ap-weather/node_modules/weather-underground-icons/dist/wu-icons-style.css";
// import "./weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "../Weather/weather.component";
import Form from "../Form/form.component";
import DateTime from "../Date/date.component";
import Title from "../Title/title.component";
import AddWeather from '../AdditionalWeather/AddWeather.component';


//api.openweathermap.org/data/2.5/weather?q={city name}
const api_key = "a7528bc9a318be533977b48cd324a631";
const timeZone_api_key = "QE1YW5X4MVWV";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      max: undefined,
      min: undefined,
      celsius: undefined,
      description: "",
      error: false,
      sunrise: undefined,
      sunset: undefined,
      date: undefined,
      clock: undefined,
      citySearch: "",
      countrySearch: "",
    };

    this.weatherIcon = {
      //Alternate Icon Pack w Color by Ashley Jager
      //https://github.com/manifestinteractive/weather-underground-icons
      //Day Icons
      Thunderstorm: "wu wu-black wu-128 wu-tstorms",
      Drizzle: "wu wu-black wu-128 wu-sleet",
      Rain: "wu wu-black wu-128 wu-rain",
      Snow: "wu wu-black wu-128 wu-snow",
      //   Atmosphere: "wu wu-black wu-128 wu-fog",
      // Clouds: "wu wu-black wu-128 wu-cloudy",
      // Clear: "wu wu-black wu-128 wu-clear",

      //Night Icons
      Thunderstorm_n: "wu wu-black wu-128 wu-tstorms wu-night",
      Drizzle_n: "wu wu-black wu-128 wu-sleet wu-night",
      Rain_n: "wu wu-black wu-128 wu-rain wu-night",
      Snow_n: "wu wu-black wu-128 wu-snow wu-night",
      //   Atmosphere_n: "wu wu-black wu-128 wu-fog wu-night",
      // Clouds_n: "wu wu-black wu-128 wu-cloudy wu-night",
      // Clear_n: "wu wu-black wu-128 wu-clear wu-night",

      //NON COLOR WEATHER ICONS
      //https://erikflowers.github.io/weather-icons/
      //Day Icons
      // Thunderstorm: "wi wi-day-thunderstorm display-1",
      // Drizzle: "wi wi-day-sleet display-1",
      // Rain: "wi wi-day-storm-showers display-1",
      // Snow: "wi wi-day-snow display-1",
      Atmosphere: "wi wi-fog display-1",
      Clouds: "wi wi-day-cloudy display-1",
      Clear: "wi wi-day-sunny display-1",

      //Night Icons
      // Thunderstorm: "wi wi-night-thunderstorm display-1",
      // Drizzle_n: "wi wi-night-sleet display-1",
      // Rain_n: "wi wi-night-storm-showers display-1",
      // Snow_n: "wi wi-night-snow display-1",
      Atmosphere_n: "wi wi-fog display-1",
      Clouds_n: "wi wi-night-cloudy display-1",
      Clear_n: "wi wi-night-clear display-1",
    };

    this.c_f = {
      Celsius: "wi wi-celsius display-1",
      Fahrenheit: "wi wi-fahrenheit display-1",
    };

    this.nightIcon = {
      Sunset: "clear wu-night",
    };
    this.dayIcon = {
      Sunrise: "clear",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  SunAnimate() {
    const sunnyIconAni = React.createElement(
      "div",
      { className: "icon sunny" },
      React.createElement(
        "div",
        { className: "sun" },
        React.createElement("div", { className: "rays" })
      )
    );
    ReactDOM.render(sunnyIconAni, document.getElementsByClassName("Sunny"));
  }

  async componentDidMount() {
    this.formatTime();
    let latt;
    let long;
    function getCurrentPosition(options = {}) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    }
    const position = await getCurrentPosition();
    console.log(position);
    latt = position.coords.latitude;
    long = position.coords.longitude;
    this.getWeather(latt, long);
    this.getTimeZone(latt, long);
  }

  celsius(temp) {
    let c = Math.floor(temp - 273.15);
    return c;
  }

  fahrenheit(temp) {
    let f = Math.floor((temp - 273.15) * 1.8 + 32);
    return f;
  }

  sunConverter(e) {
    let a = new Date(e * 1000);
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let s = a.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours = hours != 0 ? hours : 12; // the hour '0' should be '12'
    minutes = ("0" + minutes).slice(-2);
    s = s < 10 ? "0" + s : s;
    const time = hours + ":" + minutes + ":" + s + " " + ampm;
    return time;
  }

  dateConverter(e) {
    let a = new Date(e * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let weekdays = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    );
    const day = a.getDay();
    let realDay = weekdays[day];
    let format = realDay + " " + month + " " + date + ", " + year;
    return format;
  }
  // console.log(timeConverter(0));


  formatTime = () => {
    setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let s = date.getSeconds();

      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours = hours != 0 ? hours : 12; // the hour '0' should be '12'
      minutes = ("0" + minutes).slice(-2);
      s = s < 10 ? "0" + s : s;
      const time = hours + ":" + minutes + ":" + s + " " + ampm;
      // return time;
      this.setState({ clock: time });
      // document.getElementById("ClockDisplay").innerText = time;
      // document.getElementById("ClockDisplay").textContent = time;
    }, 1000);
  };

  get_WeatherIcon(icons, rangeId, iconId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232 && iconId === "11d":
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeId >= 200 && rangeId <= 232 && iconId === "11n":
        this.setState({ icon: this.weatherIcon.Thunderstorm_n });
        break;
      case rangeId >= 300 && rangeId <= 321 && iconId === "09d":
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 300 && rangeId <= 321 && iconId === "09n":
        this.setState({ icon: this.weatherIcon.Drizzle_n });
        break;
      case (rangeId >= 500 &&
        rangeId <= 531 &&
        iconId >= "09d" &&
        iconId <= "10d") ||
        iconId === "13d":
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case (rangeId >= 500 &&
        rangeId <= 531 &&
        iconId >= "09n" &&
        iconId <= "10n") ||
        iconId === "13n":
        this.setState({ icon: this.weatherIcon.Rain_n });
        break;
      case rangeId >= 600 && rangeId <= 622 && iconId === "13d":
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeId >= 600 && rangeId <= 622 && iconId === "13n":
        this.setState({ icon: this.weatherIcon.Snow_n });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeId === 800 && iconId === "01d":
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeId === 800 && iconId === "01n":
        this.setState({ icon: this.weatherIcon.Clear_n });
        break;

      case rangeId >= 801 &&
        rangeId <= 804 &&
        iconId >= "02d" &&
        iconId <= "04d":
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      case rangeId >= 801 &&
        rangeId <= 804 &&
        iconId >= "02n" &&
        iconId <= "04n":
        this.setState({ icon: this.weatherIcon.Clouds_n });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }

  getWeather = async (latitude = null, longitude = null) => {
    let API_Call;
    if (!latitude) {
      API_Call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.citySearch},${this.state.countrySearch}&appid=${api_key}`
      );
      // console.log(API_Call)
    } else {
      API_Call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
      );
    }
    const response = await API_Call.json();
    // console.log(response);

    this.setState({
      city: `${response.name}, ${response.sys.country}`,
      country: response.sys.country,
      celsius: this.celsius(response.main.temp),
      fahrenheit: this.fahrenheit(response.main.temp),
      temp_maxC: this.celsius(response.main.temp_max),
      temp_minC: this.celsius(response.main.temp_min),
      temp_maxF: this.fahrenheit(response.main.temp_max),
      temp_minF: this.fahrenheit(response.main.temp_min),
      description: response.weather[0].description,
      // icon: this.weatherIcon.Thunderstorm,
      night_icon: this.nightIcon.Sunset,
      day_icon: this.dayIcon.Sunrise,
      c_icon: this.c_f.Celsius,
      f_icon: this.c_f.Fahrenheit,
      sunrise: this.sunConverter(response.sys.sunrise),
      sunset: this.sunConverter(response.sys.sunset),
      date: this.dateConverter(response.dt),
      clock: this.formatTime(response.dt),
      raw_clock: response.dt,
      raw_sunrise: response.sys.sunrise,
      raw_sunset: response.sys.sunset,
      switch: response.weather[0].icon,
    });

    this.get_WeatherIcon(
      this.weatherIcon,
      response.weather[0].id,
      response.weather[0].icon
    );
    // console.log(response.coord);
  };

 
  getTimeZone = async (latitude, longitude) => {
    const API_Call = await fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${timeZone_api_key}&format=json&by=position&lat=${latitude}&lng=${longitude}`
    );
    const response = await API_Call.json();
    console.log(response);
    console.log(response.abbreviation);
    this.setState({
      locale_time: response.abbreviation,
    });
  };

  render() {
    return (
      <div 
        className={
          typeof this.state.city != "undefined"
            ? this.state.switch.slice(2) == "d"
              ? "bckgrndDay"
              : "bckgrndNight"
            : "bckgrndDefault"
        }
      >
        <DateTime 
          date={this.state.date}
          clock={this.state.clock}
          locale_time={this.state.locale_time}
        />
        <Title city={this.state.city} />

        <Form
          loadweather={this.getWeather}
          error={this.state.error}
          handleChange={this.handleChange}
        />

        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_fahrenheit={this.state.fahrenheit}
          temp_maxC={this.state.temp_maxC}
          temp_minC={this.state.temp_minC}
          temp_maxF={this.state.temp_maxF}
          temp_minF={this.state.temp_minF}
          description={this.state.description}
          weatherIcon={this.state.icon}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          c_icon={this.state.c_icon}
          f_icon={this.state.f_icon}
          night_icon={this.state.night_icon}
          day_icon={this.state.day_icon}
        />
        <AddWeather
          city={this.state.city}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          c_icon={this.state.c_icon}
          f_icon={this.state.f_icon}
          night_icon={this.state.night_icon}
          day_icon={this.state.day_icon}
                  />
      </div>
    );
  }

}
