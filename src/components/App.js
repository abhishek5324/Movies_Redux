import { data } from "../data.js";
import Navbar from './Navbar.js';
import MovieCard from './MovieCard.js';
import '../index.css';
import { Component } from 'react';
import {addMovies, setShowFav} from '../actions';

class App extends Component {

componentDidMount(){
  const {store} = this.props;

  store.subscribe(() => {
    console.log("UPDATED");
    this.forceUpdate();
  })

  //make api call
  //dispatch action 
 store.dispatch(addMovies(data));

  console.log("STATE",store.getState());
}

isMovieFavourite = (movie) => {
  const {favourites} = this.props.store.getState();

  const index = favourites.indexOf(movie);

  if(index !== -1)
  {
      //found the movie
      return true;
  }
  return false;
}

changeTab = (val) => {
  this.props.store.dispatch(setShowFav(val))
}

  render(){
  const {list,favourites,showFavourites} = this.props.store.getState();
  console.log("Render",this.props.store.getState());
  const displayMovies = showFavourites ? favourites :  list;
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites ? '': 'active-tabs'}`} onClick={() => this.changeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.changeTab(true)}>Favourites</div>
        </div>

        <div className="list">
          {displayMovies.map((movie,index) => (
            <MovieCard 
            movie={movie}
             key={index}
              dispatch={this.props.store.dispatch}
              isFav={this.isMovieFavourite(movie)}
               />
          ))}
        </div>
        {displayMovies.length===0 ? <h1 className="no-movies">No movies to display!</h1>:null}
      </div>
    </div>
  );
  }
}

export default App;
