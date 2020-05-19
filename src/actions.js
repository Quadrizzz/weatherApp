import {
    SET_CITY,
    GET_SEARCH_FIELD,
    FETCH_FORECAST_PENDING,
    FETCH_FORECAST_SUCCESS,
    FETCH_FORECAST_FAILED
} from '../src/constants'

export const set_City = (text)=>({
    type : SET_CITY , 
    payload : text
})

export const get_Search_Field = (text)=>({
    type : GET_SEARCH_FIELD,
    payload : text
})

export const fetct_Forecast = ()=> (dispatch)=>{
    dispatch({type : FETCH_FORECAST_PENDING});
    fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${ set_City.payload }&units=metric&appid=d2d86a50e28bb4640bcc1e017fbd9e92`,{
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
        ).then( users => { dispatch({type : FETCH_FORECAST_SUCCESS , payload : users}) }
        ).catch((error) => {
           dispatch({type: FETCH_FORECAST_FAILED , payload : error})
        });
}