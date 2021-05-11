import { data } from "../data.js";
import Navbar from './Navbar.js';
import MovieCard from './MovieCard.js';
import '../index.css';
import { Component } from 'react';
import {addMovies} from '../actions';

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

  render(){
  const movies = this.props.store.getState();
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
          {movies.map((movie,index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
  }
}

export default App;
