import React from "react";
import "./weather.style.css";

const Weather = ({ cityname, temp_celsius, temp_max, temp_min, description, weatherIcon}) =>{
    return (
        <div className="container text-light">
        <div className="Card">
        <h1 className="text-white py-3">{cityname}</h1>
        <h5 className="py-4">
            <i className={`wi ${weatherIcon}`}/>
        </h5>

        {temp_celsius ? (
        <h1 className="py-2">{temp_celsius}&deg;</h1>
        ): null}

        {/*mostrar max y min temp */}
        {minmaxTemp(temp_min, temp_max)}

        {/*weather description */}
        <h4 className="py-3">
        {description}
        </h4>
     </div>
    </div>
    );
};


function minmaxTemp(min, max){
    if(min && max){
        return(
            <h3>
            <span className="px-4">{min}&deg; min</span>
            <span className="px-4">{max}&deg; max</span>
            </h3>
        );
    }

}

export default Weather;