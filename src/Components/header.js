import React from 'react';
import '../Container/App.css'

const show = ()=>{
    document.getElementById('mobile-list').classList.toggle("flex");
}

window.onclick = function(event) {
    if (!event.target.matches('.harmbuger')) {
      var dropdowns = document.getElementsByClassName("bottom");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('flex')) {
          openDropdown.classList.remove('flex');
        }
      }
    }
  }

const Header = ({onRouteChange})=>{
    return(
        <div>
            <div className = "header">
                <h1 className = "f1 gray">Simple Forecast</h1>
                <div className = "harmbuger" onClick = {show}>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
                <div id = "button-div">
                    <button className = 'grow' onClick = {()=>onRouteChange('home')}>Home</button>
                    <button className = 'grow' onClick = {()=> onRouteChange('about')}>About</button>
                    <button className = ' grow' onClick = {()=> onRouteChange('contacts')}>Contact</button>
                </div>
            </div>

            <div className = "mobile-list" id = "mobile-list">
                    <button className = 'bottom' onClick = {()=>onRouteChange('home')}>Home</button>
                    <button className = 'bottom' onClick = {()=> onRouteChange('about')}>About</button>
                    <button  className = "bottom" onClick = {()=> onRouteChange('contacts')}>Contact</button>
                
            </div>
        </div>

    )
}

export default Header;