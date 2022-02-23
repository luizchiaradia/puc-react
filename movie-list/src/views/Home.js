import { Movie } from "../components/Movie";
import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const {
            data: {results},
        } = await MoviesService.getMovies();
        console.log(results);
        setMovies(results);
    }
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="container">
            <div className="row gy-4">
                {movies.map(movie => (
                    <div key={movie.id} className="col-3">
                    <Movie movie={movie}/>
                </div>
                ))}
            
            </div>
        </div>
    )
}