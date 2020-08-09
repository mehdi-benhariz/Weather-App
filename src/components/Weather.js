import React,{useState} from 'react';
import Screen from "./Screen";

const Weather = ({country,city}) => {
  const [sys, setsys] = useState(null);
  const [weather, setweather] = useState([]);
  const [main, setmain] = useState(null);
  const [wind, setwind] = useState(null);
  const [sucess, setsucess] = useState(false);


const fetchWeather=()=>{
  fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "843081ec94mshadce718507bf70cp121110jsn9577c99aafd5"
    }
  })
  .then(response => {
    response.json().then(res=>{
      console.log(res);
    })
  })
  .catch(err => {
    console.log("error:", err);
  });


  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=7d4ef5d23648c7c62acd3ccfa1a0a30b `)
  .then(x=>x.json().then(res=>{
    setsys(res.sys);
    setweather(res.weather);
    setmain(res.main);
    setwind(res.wind);
    console.log(res);
    setsucess(true);

  } ))
}

  fetchWeather();

    return (
      <React.Fragment>
        <h1>the weather</h1>
        {sucess &&  (
          <div>
        <h3>{weather[0].description} </h3>
        <p>sunrise:{sys.sunrise}   ||  sunset:{sys.sunset} </p>
        <p>{Math.round(main.temp)} </p>
        <p>Max temp :{} || Min temp :{}  </p>
        <p>Wind Speed :{wind.speed} </p>
          </div>
      
        ) }
      </React.Fragment>

      );
}
 
export default Weather;