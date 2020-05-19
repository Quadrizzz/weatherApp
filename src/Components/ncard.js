import React from 'react';
import '../Container/App.css';


const Ncard = (props)=>{
    return(
        <div className = "bg-white br-3  mb4" id = "ncards">
            <h1>Source : {props.name}</h1>
            <h1>Author : {props.author}</h1>
            <p>{props.title}</p>
            <p>{props.content}</p>
            <a href = {props.url}>Read More Here..</a>
            <p>{props.publishedAt}</p>
        </div>
    )
}

export default Ncard;