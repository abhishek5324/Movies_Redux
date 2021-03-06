import React,{Component} from 'react';
import { addFavourite, removeFavourite } from '../actions';
import '../index.css';

class MovieCard extends Component {
    handleFavClick = () => {
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie))
    }

    handleUnFavClick = () => {
        const {movie} = this.props;
        this.props.dispatch(removeFavourite(movie))
    }
    render() { 
        const {movie, isFav} = this.props;
        return ( 
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFav ?
                            <button className="unfavourite-btn" onClick={this.handleUnFavClick}>UnFavourite</button>
                            :
                            <button className="favourite-btn" onClick={this.handleFavClick}>Favourite</button>
                        }
                        
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MovieCard;