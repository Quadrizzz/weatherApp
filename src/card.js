import React from 'react';

const Card = ( { city , display })=>{
    if(!display){
        return(<h1>Loading...</h1>)
    }
    else{
        return(
            <div>
                <h3>city : { city }</h3>
                <div>
                    <img src = {`https://source.unsplash.com/200x200/?${display.weather[0].main},weather`}  alt="rrrrrr"/>
                    <h1>Country : { display.sys.country }</h1>
                    <h1>Weather : { display.weather[0].main }</h1>
                    <h1>Description : { display.weather[0].description }</h1>
                    <h1> Temperature : { display.main.temp_max}C</h1>
                    <h1>Windspeed : { display.wind.speed }m/s</h1> 

                </div>
            </div>
        )
    }
}

export default Card;