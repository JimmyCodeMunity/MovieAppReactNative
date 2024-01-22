import axios from "axios";
import { apiKey } from "../constants";

//define api 
const apiBaseURL = 'https://api.themoviedb.org/3/';
const trendingMoviesApiEndpoint =`${apiBaseURL}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesApiEndpoint =`${apiBaseURL}/movie/upcoming?api_key=${apiKey}`;
const topratedMoviesApiEndpoint =`${apiBaseURL}/movie/top_rated?api_key=${apiKey}`;


//fetch image
export const image500 =path=> path? `https://image.tmdb.org/t/p/w500/${path}`:null;
export const image342 =path=> path? `https://image.tmdb.org/t/p/w342/${path}`:null;
export const image185 =path=> path? `https://image.tmdb.org/t/p/w185/${path}`:null;


const apiCall = async(endpoint,params)=>{
    const options={
        method: 'GET',
        url: endpoint,
        params: params? params:{}
    }
    try {
        const response = await axios.request(options);
        return response.data;
        
    } catch (error) {
        console.log('error', error);
        
    }
}

export const fetchTrending =()=>{
    return apiCall(trendingMoviesApiEndpoint);
}

export const fetchUpcoming =()=>{
    return apiCall(upcomingMoviesApiEndpoint);
}

export const fetchToprated =()=>{
    return apiCall(topratedMoviesApiEndpoint);
}