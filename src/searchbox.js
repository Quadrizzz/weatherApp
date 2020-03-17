import React from 'react';

const Searchbox = ({city , searchchange})=>{
    
  return(
    <div className = "pa2">
        <input type = "search" placeholder = 'Search City ' 
              id = "inputbox"
         ></input>
         <button onClick = {searchchange}>Search</button>
    </div>
            )
        
        

}

export default Searchbox;