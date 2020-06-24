import React from 'react';
import '../Container/App.css';


const Ncard = (props)=>{
    return(
        <div className = "bg-white br-3  mb4" id = "ncards">
            <div>
                <h1 className = "f3">Source : {props.name}</h1>
                <h1 className = "f4">Author : {props.author}</h1>
            </div>
            <p className = "f4 title">{props.title}</p>
            <p className = "f4 text">{props.content}</p>
            <a className = "f4 " href = {props.url}>Read More..</a>
            <p className = "f4 text">{props.publishedAt}</p>
        </div>
    )
}

export default Ncard;