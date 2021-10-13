import React from "react";
import "./form.style.css";

const Form = props =>{
    return(
        <div className="container h-100">
            <form onSubmit={props.loadweather}>
            <div>{props.error ? error() : ""}</div>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input
                    type="text"
                    className="form-control"
                    name="city"
                    autoComplete="off"
                    placeholder="Ciudad"
                    />
                </div>
                <div className="col-md-3">
                <input
                type="text"
                className="form-control"
                name="country"
                autoComplete="off"
                placeholder="País"
                />
                </div>
                <div className="col-md-3 mt-md-0 mt-2 text-md-left">
                    <button className="btn btn-light text-secondary">Obtener Clima</button>
                </div>
            </div>
            </form>
        </div>
    );
};

const error= props => {
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Por favor Ingrese una Ciudad y un País.
        </div>
    );
};

export default Form;