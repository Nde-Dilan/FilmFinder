//Here will goes the code for all the data fetching , the store of our entire app willcome from here
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

//movie/changes?page=1

export const tmdbApi = createApi({
    
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        //INFO:Get genres
        getGenres:builder.query({
            query:()=>{
                return `/genre/movie/list?api_key=${tmdbApiKey}`
            }
        }),
        //* Get movies by type
        getMovies: builder.query({
            query: ({genreIdOrCategoryName,page,searchQuery}) => {

                //INFO:Get movies by search
                if(searchQuery){
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
                }
                //INFO:Get movies by category
                
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName==='string'){
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
                }
                //INFO:Get movies by genreId
               if(genreIdOrCategoryName && typeof genreIdOrCategoryName==='number'){
                return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
               }
               //INFO: Get popular movies
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            }
        })
    })
})

//When ever you build an endpoint using createApi(such as getMovies()),redux toolkit querry automaticaly create a hook for us
export const {
    useGetMoviesQuery,
    useGetGenresQuery,
} = tmdbApi;

//Now we can just use this hook wherever we want tofetch movies data