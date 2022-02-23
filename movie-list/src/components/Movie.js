import { Link } from "react-router-dom";

export const Movie = ({movie}) => (
    <div className="bg-info p-4">
        <figure className="figure">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="figure-img img-fluid rounded" alt="..." />
        </figure>
        <div className="movie-excerpt">
            <h3>{movie.title}</h3>
            <Link className="btn btn-primary" to={`/movie/${movie.id}`}>Veja mais</Link>
        </div>
    </div>
)