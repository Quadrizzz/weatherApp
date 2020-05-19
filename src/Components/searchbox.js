import React from 'react';
import '../Container/App.css'

const Searchbox = ({city , searchchange , change})=>{
    
  return(
    <div className = "search">
        <input type = "search" placeholder = 'Search City ' 
              id = "inputbox"
              onChange = { change  }
         ></input>
         <button onClick = {searchchange}>Search</button>
         <h1>Search for a city</h1>
    </div>
            )
        
        

}

export default Searchbox;