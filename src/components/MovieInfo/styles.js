import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
   container:{
    display:'flex',
    justifyContent:'space-around',
    margin:'10px 0 !important',
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        flexWrap:'wrap',
    }
   },
   poster:{
    borderRadius:'20px',
    boxShadow:'0.5em 1em 1em rgb(64,64,64)',
    width:'80%',
    [theme.breakpoints.down('md')]:{
        width:'50%',
        height:'350px',
        margin:'0 auto',
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        height:'350px',
        margin:'0 auto',
        marginBottom:'30px',
    }
   },
   genres:{
    margin:'10px 0 !important',
    display:'flex',
    justifyContent:'space-around',
    flexWrap:'wrap',
   },
   genreImage:{
    filter:theme.palette.mode === 'dark' && 'invert(1)',
    marginRight:'10px',

   },
   links:{
    display:'flex',
    textDecoration:'none',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
        padding:'0.5rem 1rem',
    },
   },
   castImage:{
    width:'100%',
    maxWidth:'7em',
    height:'8em',
    objectFit:'cover',
    borderRadius:'10px',
   },
   btnContainer:{
    display:"flex",
    justifyContent:"space-between",
    width:"100%",
    [theme.breakpoints.down('sm')]:{
        flexDirection:"column",
    },
   },
   modal:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
   },
   video:{
    width:'50%',
    height:'50%',
    [theme.breakpoints.down('sm')]:{
        width:'90%',
        height:'90%',
    }

   }

}));
