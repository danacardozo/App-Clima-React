import React from "react";
import "./weather.style.css";

const Weather = props =>{
    return (
        <div className="container text-light">
        <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
            <i className={`wi ${props.weatherIcon}`}/>
        </h5>

        {props.temp_celsius ? (
        <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ): null}

        {/*mostrar max y min temp */}
        {minmaxTemp(props.temp_min, props.temp_max)}

        {/*weather description */}
        <h4 className="py-3">
            {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
     </div>
    </div>
    );
};


function minmaxTemp(min, max){
    if(min && max){
        return(
            <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
            </h3>
        );
    }

}

export default Weather;