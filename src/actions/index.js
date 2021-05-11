// {
//     type: "ADD_MOVIE",
//     movies: [m1]

// }


// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REM_FAVOURITE = 'REM_FAVOURITE'; 
export const SET_SHOW_FAV = 'SET_SHOW_FAV';

//action creators
export function addMovies (movies) {
    return {
        type:ADD_MOVIES,
        movies
      }
}

export function addFavourite (movies) {
    return {
        type:ADD_FAVOURITE,
        movies
      }
}

export function removeFavourite (movies) {
    return {
        type:REM_FAVOURITE,
        movies
      }
}
export function setShowFav (val) {
        return {
            type:SET_SHOW_FAV,
            val
          }
    
}