import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    toolbar: {
        display:'flex',
        height:'80px',
        justifyContent:'space-between',
        marginLeft:'240px',
        //For this .down towork don't forget tosetup a ThemeProvider inside the index.js file
        [theme.breakpoints.down('sm')]:{
            marginLeft:0,
            backgroundColor:'black',
            flexWrapp:'wrapp',
        }
     },
     menuBtn:{
        marginRight:theme.spacing(2),
        //when we reach a width up than sm we change the display to none
        [theme.breakpoints.up('sm')]:{
            display:'none',
        }
     }
}));
