http://domineering-nut.surge.sh/
- [Project Planning](#project-planning)
  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries](#libraries)
    - [Data](#data)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
    - [Helper Functions](#helper-functions)
  - [Post-MVP](#post-mvp)
- [Project Delivery](#project-delivery)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

## Project Planning

<br>

### Overview

**Project Title** 
Apollo Weather

**Project Description** Apollo weather is an app that displays weather.  A user will be able to search a city and render a 5 day forecast. It will include images for different weather conditions.

<br>

### Wireframes

![Layout](./weatherWireframe.png)


<br>

### MVP

_The **Apollo Weather** MVP_
- Users will be able to search by city
- Upon searching, different weather updates for each city will be rendered
- A high and low forecast for the specific city will be displayed
- Users will get weather based on location
- Display will include temperature readings, weather icons and list the current weather status.

<br>

#### Goals

- _Sucessfully create 5 components_
- _Successfully choose and call working API_
- _Create a clean, readable display._
- _etc._

<br>

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| " | _Lorem ipsum dolor sit amet, consectetur._ |
| unix-timestamp | _Lorem ipsum dolor sit amet, consectetur._ |

|   Axios   | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### Data
https://openweathermap.org/appid
http://api.timezonedb.com/v2.1/get-time-zone?key=${timeZone_api_key}&format=json&by=position&lat=${latitude}&lng=${longitude}`


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| WeatherAPI |      yes      | _https://openweathermap.org/current_ | _/data/2.5/weather?q={city name}&appid={your api key}_ |
| TimezoneDb |      yes      | _http://api.timezonedb.com/v2.1/get-time-zone?key=${timeZone_api_key}&format=json&by=position&lat=${latitude}&lng=${longitude}_ |

```
{
  "coord": {"lon": -122.08,"lat": 37.39},
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
}```

<br>

#### Component Hierarchy


```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ App.jsx
      |__ Search.jsx
      |__ Forecast.jsx
      |__ Weather.jsx
      |__ Date.jsx
```

<br>

#### Component Breakdown

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App       | class |   y   |   n   | _Initial file to implement the server._               |
|  Search      | function |   n   |   y   | _Search bar used to find specific cities._       |
|   Forecast   |   function    |   n   |   y   | _A 5-day span of weather conditions._      |
| Weather      | function |   n   |   y   | _Display's current weather based on location_
|    Date      | function |   n   |   y   | _Displays current Date and Time_ |

<br>

### Post-MVP

- Adding more components
- Responsive Background
- Sunrise/Sunset information
- Responsive Icons

- _Storybook and Tests._

 - None
<br>

***

## Project Delivery

### Code Showcase
This is a ternary that allowed my to change my background depending on the time day. It would save background style changes to different div classes within the Body.


```
 <div 
        className={
          typeof this.state.city != "undefined"
            ? this.state.switch.slice(2) == "d"
              ? "bckgrndDay"
              : "bckgrndNight"
            : "bckgrndDefault"
        }
      ></div>```

### Code Issues & Resolutions

Properly giving the user's weather based on location.