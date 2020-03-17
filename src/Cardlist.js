import React from 'react';
import Card from './card';

const Cardlist = ({ cities })=>{
    const cardComponent = cities.map( (user , i) => {
        return (  <Card key = {i} CityId = {cities[i].CityId} City = {cities[i].City} Country = {cities[i].Country}/>)});
    return(
    <div>
        { cardComponent }
    </div>
    )

}

export default Cardlist;