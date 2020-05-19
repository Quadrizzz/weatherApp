import {
    SET_CITY,
    GET_SEARCH_FIELD,
    FETCH_FORECAST_PENDING,
    FETCH_FORECAST_SUCCESS,
    FETCH_FORECAST_FAILED
} from '../src/constants';

const initialState = {
    display : null,
    city : "",
    trial : false,
    error : "",
    isPending : false
}

export const setCity = (state = initialState , action = {})=>{
    switch (action.type) {
        case (SET_CITY) :
            return Object.assign({} , state , { city : action.payload});
            break;
    
        default:
            return state;
    }
}

export const getSearchField = (state = initialState , action = {})=>{
    switch (action.type) {
        case GET_SEARCH_FIELD:
            if(action.payload === ""){
                return Object.assign({} , state , { trial : false , display : null})
            }
            else{
                return Object.assign({} , state , {trial : true })
            }
            break;
    
        default:
            return state;
    }
}

export const getForecast = (state = initialState , action = {})=>{
    switch (action.type) {
        case FETCH_FORECAST_PENDING:
            return Object.assign({} , state , {isPending : true})

        case FETCH_FORECAST_SUCCESS:
            return Object.assign({} , state , { display : action.payload , isPending : false  , trial : true})

        case FETCH_FORECAST_FAILED:
            return Object.assign({} , state , {error : action.payload , display : null , isPending : false , trial : false})
    
        default:
            return state;
    }
}