import React, { Component } from 'react';
import './App.css';
import Card from '../Components/card';
import Loading from '../Components/loading'
// import Cardlist from '../Components/ncardlist'
import Searcbox from '../Components/searchbox'
import Header from '../Components/header'
import Contacts from '../Components/contacts'
import About from '../Components/about';

class App extends Component{
  constructor(){
    super();
    this.state = {
      route : "home",
      city : "",
      display:null,
      news :  null,
      country : null,
      loading : "false"
    }
  }

  onsearchchange = () => {
    this.fethdata()
    this.setLoading("true")
  }

  onchange = ( e )=>{
        if(e.target.value === ""){
          this.setState({ display : null});
        }
        else{
          this.setState({city : e.target.value})
        }
  }

  setLoading = (val)=>{
    this.setState({loading : val})
  }

  onRouteChange = (input) =>{
    this.setState({route : input})
    console.log(this.state.route)
  }


  fethdata=()=>{
    fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${ this.state.city }&units=metric&appid=d2d86a50e28bb4640bcc1e017fbd9e92`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  
  }).then((response)=>{ 
    if(response.status >= 200 && response.status <= 299){
      return response.json()}
    else{
      throw Error(response.statusText)
    }
    }
      ).then( users => {
        if(users){
          this.setState({ display : users}, this.setLoading("false"))
 
        }
      }
    ).catch((error) => {
         alert(error + " PLEASE ENTER A VALID CITY")
         this.setLoading("false")
      });
  }



  render(){
    const {city, display, route, errorText, loading} = this.state;
  if(loading === "false" && route === 'home' && !display){
    return(
      <div id = 'main'>
        <Header onRouteChange = {this.onRouteChange}/>
        <Searcbox   searchchange = {this.onsearchchange} change = {this.onchange} />
      </div>
    )
  }
  else if(loading === "true" && route === "home" && !display){
    return(
      <div id = 'main'>
        <Header onRouteChange = {this.onRouteChange}/>
        <Searcbox   searchchange = {this.searchchange}  change = { this.onchange }/>
        <div className = "Loading">
          <Loading/>
        </div>
      </div>
    )
  }
  else if(display && route === "home"){
    return(
        <div id = 'main'>
          <Header onRouteChange = {this.onRouteChange}/>
          <Searcbox   searchchange = {this.searchchange}  change = { this.onchange }/>
          <Card city = { city } display = { display }  errorText = {errorText}/>
        </div>
      )
  }
  if(route === "contacts"){
    return(
      <div id = 'main'>
        <Header onRouteChange = {this.onRouteChange}/>
        <Contacts />
      </div>
    )
  }

  if(route === "about"){
    return(
      <div id = 'main'>
        <Header onRouteChange = {this.onRouteChange}/>
        <About />
      </div>
    )
  }
  


  }
}

export default App;
