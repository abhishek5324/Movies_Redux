// {
//     type: "ADD_MOVIE",
//     movies: [m1]

// }


// actioj types
export const ADD_MOVIES = 'ADD_MOVIES';


//action creators
export function addMovies (movies) {
    return {
        type:ADD_MOVIES,
        movies
      }
}