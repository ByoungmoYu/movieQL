import { getMovies, getById, getSuggestions } from "../db/db";

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getById(id),
        suggestions: (_, { id }) => getSuggestions(id)
        // },
        // Mutation: {
        //     addMovie: (_, {name, score}) => addMovie(name, score),
        //     deleteMovie: (_, {id}) => deleteMovie(id)
    }
};

export default resolvers;