import React from 'react';
import '../Container/App.css'

const About = ({onRouteChange})=>{
    return(
        <div className = "mt4 white">
            <h2 className = "tc">This App was built me<br></br>(you can check me out by clicking contact)<br></br>
                to check my progress as a developer.<br></br>All weather data was gotten from<br></br>
                openweathermap.org (thanks to them)<br></br> and the news update was gotten from https://newsapi.org/
            </h2>
        </div>
    )
}

export default About;