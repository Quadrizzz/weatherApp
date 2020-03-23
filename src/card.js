import React from 'react';
import './App.css';
import Temp from './temp_icon.png'
import Wind from './logo_1.png'

const Card = ( { city , display })=>{
    if(!display){
        return(<h1>Search for a city</h1>)
    }
    else{
        return(
            <div className = " card ">
                <div id = "fdiv">
                    <h3>City : { city }</h3>
                    <h3>Country : { display.sys.country }</h3>
                </div>
                <div id = "sdiv">
                    <h3>Weather : { display.weather[0].main }</h3>
                    <img src = {`http://openweathermap.org/img/wn/${ display.weather[0].icon }@2x.png`}  alt="rrrrrr"/>
                    <h3>Description : { display.weather[0].description }</h3>
                </div>
                <div>
                    <h3> Temperature : { display.main.temp_max }C</h3>
                    <img  src = { Temp } alt ='temp'/>
                    <h3>Windspeed : { display.wind.speed }m/s</h3>
                    <img  src = { Wind } alt ='temp'/>
                </div> 

               
            </div>
        )
    }
}

export default Card;