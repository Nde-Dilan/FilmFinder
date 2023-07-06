import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery, Menu } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//TODO: install the @mui/icons-material package 
// import { Menu,AccountCircle, Brightness4,Brightness7} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function NavBar() {
    const classes = useStyles();
    // Is the width is under 600 px then we are on mobile device else weareon laptop
    const isMobile = useMediaQuery('(max-width:600px)')
    // This material ui hook is to now when we are on dark/light mode
    const theme = useTheme()
    // To know if the user is authentificated or not

    const isAuthenticated = true
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                {/* if we are on mobile i want a Menu btn followed by a sun btn to toggle theme mode */}
                {isMobile && (
                    <IconButton
                        color="inherit"
                        edge="start"
                        style={{ outline: 'none' }}
                        onClick={() => { }}
                        className={classes.menuBtn}
                    >
                        <Menu />
                    </IconButton>
                )}
                <IconButton color="inherit" sx={{ marginLeft: 1 }} onClick={() => { }}>
                    {/* <Brightness7></Brightness7> */}
                    {
                        // theme.palette.mode==='dark' ? <Brightness7/>:<Brightness4/>
                    }
                     </IconButton>
                    {/* When we are on desktop we want to see the search bar right after the previous btns */}
                    {!isMobile && 'Search...'}
                    <div>
                        {/* On mobile qs on Desktop we check if the user is not log in we show a btn to login else we show a button(containing an Avatar component) directing the user tohis/her profile and if we are on desktop we also display 'My Movies'  */}
                        {!isAuthenticated
                            ? (
                                <Button color="inherit" onClick={() => { }}>
                                    {/* Login &nbssp; <AccountCircle/> */}
                                </Button>
                            ) : (
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/profile/:id"
                                    className={classes.linkBtn}
                                    onClick={() => { }}
                                >
                                    {!isMobile && <>My Movies &nbsp;</>}
                                    {/* Display the profile icon on both cases */}
                                    <Avatar
                                        style={{ width: 30, height: 30 }}
                                        alt="Profile"
                                    />
                                </Button>
                            )}
                    </div>
                    {/* On mobile we display the search bar after the other components */}
                    {isMobile && 'Search...'}
               
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;
