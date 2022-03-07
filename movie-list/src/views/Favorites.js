import { useSelector } from "react-redux";

export const Favorites = () => {
    const favorites = useSelector(state => state.favorites)
    return (
        <section className="container">
            <h1>Meus Filmes Favoritos</h1>
            <ul>
                {favorites.movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
            </ul>
        </section>
    )
};