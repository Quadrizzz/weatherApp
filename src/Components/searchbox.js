import React from 'react';
import '../Container/App.css'

const Searchbox = ({city , searchchange})=>{
    
  return(
    <div className = "search">
        <input type = "search" placeholder = 'Search City ' 
              id = "inputbox"
         ></input>
         <button onClick = {searchchange}>Search</button>
    </div>
            )
        
        

}

export default Searchbox;