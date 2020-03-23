import React, { Component } from 'react';
import './App.css';
import Card from './card';
import Searcbox from './searchbox'
import Header from './header'

class App extends Component{
  constructor(){
    super();
    this.state = {
      city : "",
      display:null
    }
  }

  onsearchchange = () => {
    this.setState({city : document.getElementById("inputbox").value }, this.fethdata)

  }

  fethdata=()=>{
    fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${ this.state.city }&units=metric&appid=d2d86a50e28bb4640bcc1e017fbd9e92`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  
  }).then(response=>{ 
      return response.json()}).then( users => { this.setState({ display : users}) });
  }

  render(){
  return(
      <div id = 'main'>
        <Header/>
        <Searcbox   searchchange = {this.onsearchchange} />
        <Card city = { this.state.city } display = { this.state.display }/>
      </div>
    )
  }
}

export default App;
