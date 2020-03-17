import React from 'react';

const Card = ( { city } , { display })=>{
    return(
        <div>
            <h3>city : { city }</h3>
            <div>
                <h5>{ display }</h5> 
            </div>
        </div>
    )
}

export default Card;