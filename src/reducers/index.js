import {ADD_MOVIES, ADD_FAVOURITE,REM_FAVOURITE, SET_SHOW_FAV } from '../actions';

const initialmoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export default function movies (state = initialmoviesState,action) {

    switch (action.type)
    {
        case ADD_MOVIES: return{
            ...state,
            list: action.movies
        }

        case ADD_FAVOURITE: return {
            ...state,
            favourites:[action.movies, ...state.favourites]
        } 
        case REM_FAVOURITE : 
            const filteredArray =  state.favourites.filter(
                movie => movie.Title !== action.movies.Title
            );
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAV:
            return{
                ...state, showFavourites: action.val
            }
        
        default: return state;
    }
   
        
    return state;

}