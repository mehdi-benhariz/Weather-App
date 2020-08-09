import React ,{useState} from 'react';
import Weather from "./components/Weather";
import FooterPage from "./components/FooterPage"
import Nav from  "./components/Nav";

function App() {
  const [country, setcountry] = useState("Tunisia");
  const [city, setcity] = useState("sousse");
  const [isOn, setisOn] = useState(false);

  return (
    <div className="App">
      <Nav setisOn={setisOn} setcity={setcity} setcountry={setcountry}  />
      {!isOn && <p id="info" > Please choose a country and a city to see the weather info  </p> }
      {isOn && <Weather country={country} city={city} />}
      <FooterPage />
    </div>
  );
}

export default App;
