import React, { Component } from 'react';
import './App.css';
import Card from './card';
import Searcbox from './searchbox'

class App extends Component{
  constructor(){
    super();
    this.state = {
      city : "",
      display : []
    }
  }

  onsearchchange = () => {
    this.setState({city : document.getElementById("inputbox").value })
    this.fethdata()
    // console.log(event.target.value)
  }

  fethdata=()=>{
    fetch(`https://www.api.openweathermap.org/data/2.5/weather?q=${ this.state.city }&appid=d2d86a50e28bb4640bcc1e017fbd9e92`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(response=>{ 
      return response.json()}).then( users => { console.log(users)});
  }

  render(){
  return(
      <div>
        <Searcbox   searchchange = {this.onsearchchange} />
        <Card city = { this.state.city } display = { this.state.display }/>
      </div>
    )
  }
}

export default App;
