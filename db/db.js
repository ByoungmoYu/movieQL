// let movies = [{
//     id: 0,
//     name: "Evan",
//     score: 2
// }, {
//     id: 1,
//     name: "Evan1",
//     score: 3
// }, {
//     id: 2,
//     name: "Evan2",
//     score: 4
// }, {
//     id: 3,
//     name: "Evan3",
//     score: 1
// }, {
//     id: 4,
//     name: "Evan4",
//     score: 5
// }];

// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0];
// }

// export const deleteMovie = id => {
//     const cleanMovies = movies.filter(movie => movie.id !== id);
//     // console.log(movies.length);
//     // console.log(cleanMovies.length);
//     if(movies.length > cleanMovies.length) {
//         movies = cleanMovies;
//         return true;
//     } else {
//         return false;
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: parseInt(`${movies.length + 1}`),
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// }

import fetch from "node-fetch";
import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/"
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

// export const getMovies = (limit, rating) => {
    // let REQUEST_URL = API_URL;
    // if (limit > 0) {
    //     REQUEST_URL += `limit=${limit}`;
    // }
    // if (rating > 0) {
    //     REQUEST_URL += `&minimum_rating=${rating}`;
    // }

    // return (async () => {
    //     return await fetch(REQUEST_URL).then(res => res.json()).then(json => json.data.movies);
    // })();
// }

export const getMovies = async (limit, rating) => {
    // let REQUEST_URL = API_URL;
    // if (limit > 0) {
    //     REQUEST_URL += `limit=${limit}`;
    // }
    // if (rating > 0) {
    //     REQUEST_URL += `&minimum_rating=${rating}`;
    // }

    // return (async () => {
    //     return await fetch(REQUEST_URL).then(res => res.json()).then(json => json.data.movies);
    // })();

    const {
        data: {
            data: {movies}
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minumum_rating: rating
        }
    });

    return movies;
}

export const getById = async id => {
    const {
        data: {
            data: {movie}
        }
    } = await axios(MOVIE_DETAIL_URL, {
        params: {
            movie_id: id
        }
    });
    
    return movie;
}

export const getSuggestions = async id => {
    const {
        data: {
            data: {movies}
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id
        }
    });
    
    return movies;
}


// export const getById = id => {
//     return (async () => {
//         const body = { movie_id: id };
//         return await fetch(`${MOVIE_DETAIL_URL}`, {
//             method: 'POST',
//             body: JSON.stringify(body),
//             headers: { 'Content-type': 'application/json' }
//         }).then(res => res.json()).then(json => json.data.movie);
//     })();
// }