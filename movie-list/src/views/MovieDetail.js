import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = (props) => {
    const [movie, setMovie] = useState('');
    const { id } = useParams();
    const getMovieDetais = async () => {
        const {
            data
        } = await MoviesService.getMovieDetais(id);
        console.log(data);
        setMovie(data);
    }
    useEffect(() => {
        getMovieDetais();
    }, []);
    return (
        <div className="container">
            <div className="bg-info p-4 clearfix">
                <figure className="figure float-start w-25">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="figure-img img-fluid rounded" alt="..." />
                </figure>
                <div className="float-start ps-4 w-75">
                    <h3>{movie.title}</h3>
                    <p className="">{movie.overview}</p>
                    <span className="d-block mb-2">Linguagem Original: {movie.original_language}</span>
                    <span className="d-block">Nota do Público: {movie.vote_average}</span>
                </div>
            </div>
        </div>
    )
};