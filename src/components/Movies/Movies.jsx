import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, UseMediaQuery, Typography } from '@mui/material';
//redux stuff
import { useSelector } from 'react-redux';
import  {selectGenreOrCategory}  from '../../feautures/currentGenreOrCategory';
//Api calls
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

const Movies = () => {
  const [page, setPage] = useState(1);
  
  const {genreIdOrCategoryName, searchQuery}=useSelector((state)=>state.currentGenreOrCategory);
  //Now that we have the info about the category or genre let's fetch data base on that
  const { data,error,isFetching } = useGetMoviesQuery({genreIdOrCategoryName,page,searchQuery});
  //the data passed here are getting intercepted inside the tmdb.js service
  if(isFetching){
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem"/>
      </Box>
    )
  }
  if(!data.results.length){
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant='h4'>
      No movies that match that name.
      <br />
      Please search for something else.
        </Typography>
      </Box>
    )
  }
  if(error){
    console.log(error)
    return " An error has occured."
  }
  console.log(data);
  return (
    <div className="">
      <MovieList movies={data} />
    </div>
  );
}
export default Movies;
