import React, { Component } from 'react';
import './App.css';
import Card from '../Components/card';
import Loading from '../Components/loading'
// import Cardlist from '../Components/ncardlist'
import Searcbox from '../Components/searchbox'
import Header from '../Components/header'
import Contacts from '../Components/contacts'
import About from '../Components/about';
// import construction from './construction.jpg'

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
    fetch('https://blooming-sea-31036.herokuapp.com/getweather',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
      city : `${this.state.city}`
    })
  
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
          // this.setLoading("false")
          // console.log(users)
 
        }
      }
    ).catch((err) => {
         alert(err + " PLEASE ENTER A VALID CITY")
         console.log(err)
         this.setLoading("false")
      });
  }



  render(){
    const {city, display, route, errorText, loading} = this.state;
  if(loading === "false" && route === 'home' && !display){
    return(
    //   <div className = 'construction'>
    //     <img src = {construction} alt = "Site Under Construction"></img>
    //   </div>
    // )
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
