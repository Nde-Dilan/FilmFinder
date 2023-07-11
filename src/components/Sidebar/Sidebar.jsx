import React, { useEffect } from 'react'
import { Divider, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';
const redLogo = 'https://fontmeme.com/permalink/230710/3dfae0d3796fc9e5a1e6617510d5f321.png';
const blueLogo = 'https://fontmeme.com/permalink/230711/ba36065c234a280059a1d7d1eb69e6ce.png';

import { useGetGenresQuery } from '../../services/TMDB';


const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
]
const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Animation', value: 'animation' },
]
const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme();
    const classes = useStyles()
    const { data, isFetching } = useGetGenresQuery();
    console.log(data);

    return (
        <>
            <Link to="/" className={classes.imageLink}>
                <img src={theme.palette.mode === 'light' ? blueLogo : redLogo} alt="FilmFinder logo" className={classes.image} />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {
                    categories.map(({ label, value }) => (
                        <Link key={value} className={classes.links} to='/'>
                            <ListItem onClick={() => { }} button>
                                <ListItemIcon>
                                    {/* <img src={} alt="Icon" className={classes.genreImages} height={30} /> */}
                                </ListItemIcon>
                                <ListItemText primary={label} />
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {  (isFetching) ?
            
                <Box display="flex" justifyContent="center">
                    <CircularProgress />
                </Box>
                
                :
                
                    data.genres.map(({ id, name }) => (
                        <Link key={name} className={classes.links} to='/'>
                            <ListItem onClick={() => { }} button>
                                <ListItemIcon>
                                    {/* <img src={} alt="Icon" className={classes.genreImages} height={30} /> */}
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </>
    )
}
export default Sidebar;
