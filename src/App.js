import React, {useState} from "react";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./app_component/weather.component";
import Form from './app_component/form.component';


//api call                api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}

const API_key="11cb470b3e42fb61ce2b17af2b62ce33";

function App (){

  const initialState = {
      city: undefined,
      country: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false,
    };

    const[state, setState] = useState(initialState);
  
    const weatherIcon = {
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear: "wi-day-sunny",
      Clouds:"wi-day-fog"
    };

    const[iconos, setIcon] = useState(weatherIcon)


  function get_WeatherIcon(icons,rangeId) {
    switch(true){
      case rangeId >= 200 && rangeId < 232:
        setIcon({...iconos, icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        setIcon({...iconos, icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        setIcon({...iconos, icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        setIcon({...iconos, icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        setIcon({...iconos, icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        setIcon({...iconos, icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        setIcon({...iconos, icon: icons.Clouds});
        break;
      default:
        setIcon({...iconos, icon: icons.Clouds });
    }
  };

  function calCelsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  const getWeather = async (e) => {

    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    
    if(country && city){
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&lang=sp`
        );
    
      const response = await api_call.json();
      
      setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: calCelsius(response.main.temp),
        temp_max: calCelsius(response.main.temp_max),
        temp_min: calCelsius(response.main.temp_min),
        description: response.weather[0].description,
      });

      get_WeatherIcon(weatherIcon, response.weather[0].id);

      console.log(response)

    }

    else{
      setState({error:true})
    }
  };

  



    return (
      <div className="App">
        <Form loadweather={getWeather}  error={state.error} />
        <Weather
        cityname={state.city}
        country={state.country}
        temp_celsius={state.celsius}
        temp_max={state.temp_max}
        temp_min={state.temp_min}
        description={state.description}
        weatherIcon={iconos.icon}
        />
        
    </div>
    );
  
};

export default App;