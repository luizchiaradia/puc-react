import axios from 'axios';

const API_KEY = '2b3b2b86729e52a44ec7324666cb27d9';
const BASE_URL = 'https://api.themoviedb.org/3';
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('/discover/movie'));
    }
    static getMovieDetais(id) {
        return axios(withBaseUrl(`/movie/${id}`));
    }
}