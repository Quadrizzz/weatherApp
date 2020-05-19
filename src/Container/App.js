import React, { Component } from 'react';
import './App.css';
import Card from '../Components/card';
import Cardlist from '../Components/ncardlist'
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
      trial : false,
      news :  null,
      country : null
    }
    this.fetchNews = this.fetchNews.bind(this);
  }

  onsearchchange = () => {
    this.setState({city : document.getElementById("inputbox").value }, this.fethdata)
    this.setState({trial : true})
  }

  onchange = ( event )=>{
        if(event.target.value === ""){
          this.setState({ display : null});
          this.setState({trial : false})
        }
  }

  onRouteChange = (input) =>{
    this.setState({route : input})
    console.log(this.state.route)
  }


  fethdata=()=>{
    fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${ this.state.city }&units=metric&appid=d2d86a50e28bb4640bcc1e017fbd9e92`,{
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
          this.setState({ display : users})
          this.setState({country : users.sys.country})
          this.fetchNews()

        }
      }
    ).catch((error) => {
         alert(error + " PLEASE ENTER A VALID CITY")
      });
  }
  fetchNews = ()=>{
   
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=ae9717a8858e42ac93e084632e4f5386`)
      .then(response => response.json())
      .then((data)=>{
        this.setState({news : data})
      })    
  }

  render(){
    const {city, display, news, trial, route, errorText} = this.state;
  if(!this.state.trial && route === 'home'){
    return(
      <div id = 'main'>
        <Header onRouteChange = {this.onRouteChange}/>
        <Searcbox   searchchange = {this.onsearchchange} change = {this.onchange} />
      </div>
    )
  }
  else if(trial && route === "home"){
    return(
        <div id = 'main'>
          <Header onRouteChange = {this.onRouteChange}/>
          <Searcbox   searchchange = {this.searchchange}  change = { this.onchange }/>
          <Card city = { city } display = { display }  errorText = {errorText}/>
          <Cardlist news = {news} />
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
