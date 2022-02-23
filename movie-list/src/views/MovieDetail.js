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
            <div>{movie.id}</div>
        </div>
    )
};