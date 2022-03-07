import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie, removeMovie } from "../store/actions/movies";

export const Movie = ({ movie }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites)
    return (
        <div className="bg-info p-4">
            <figure className="figure">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="figure-img img-fluid rounded" alt="..." />
            </figure>
            <div className="movie-excerpt">
                <h3>{movie.title}</h3>
                <Link className="btn btn-primary" to={`/movie/${movie.id}`}>Veja mais</Link>
                {
                    favorites.movies.find(m => m.id === movie.id)
                    ?  (<button className="btn btn-warning mt-2" onClick={() => dispatch(removeMovie(movie))}>Remover aos Favoritos</button>)
                    : (<button className="btn btn-secondary mt-2" onClick={() => dispatch(addMovie(movie))}>Adicionar aos Favoritos</button>)
                }
                
            </div>
        </div>
    )
};