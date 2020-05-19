import React from 'react';
import '../Container/App.css'

const Header = ({onRouteChange})=>{
    return(

        <div className = "header">
            <h1>Simple Forecast</h1>
            <div>
                <button className = 'grow' onClick = {()=>onRouteChange('home')}>Home</button>
                <button className = 'grow' onClick = {()=> onRouteChange('about')}>About</button>
                <button className = ' grow' onClick = {()=> onRouteChange('contacts')}>Contact</button>
            </div>
        </div>

    )
}

export default Header;