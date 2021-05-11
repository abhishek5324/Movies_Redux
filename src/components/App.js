import { data } from "../data.js";
import Navbar from './Navbar.js';
import MovieCard from './MovieCard.js';
import '../index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
          {data.map((movie,index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
