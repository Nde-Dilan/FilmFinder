import React,{useEffect} from 'react';

import { useSelector } from 'react-redux';
import { userSelector } from '../../feautures/auth'
//Get the user name and id from the created session

import { Typography,Button,Box } from '@mui/material';
import { ExitToApp, Logout } from '@mui/icons-material';
const Profile = ()=> {
  console.log('Profile');
  const {user:{username}}=useSelector(userSelector);

  const logOut = ()=>{
    localStorage.clear();

    window.location.href = "/";
  }
  const favoriteMovies = [];
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" >
        <Typography variant='h4' gutterBottom>My Profile</Typography>
        <Button color='inherit' onClick={logOut}>
          Logout &nbsp;<ExitToApp/>
        </Button>
      </Box>
      {!favoriteMovies.length 
      ? <Typography variant='h5'>Add favorites or watchlist some movies to see them here! </Typography>
      : <Box>
        FAVORITE MOVIES
      </Box>
     }
    </Box>
  );
}
export default Profile;
