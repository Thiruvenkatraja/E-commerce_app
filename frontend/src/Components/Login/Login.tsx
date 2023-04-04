import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";



const theme = createTheme();

export default function LogIn() {

  const [loading, setLoading] = useState(false);
  const [success,setSuccess]= useState(false);
  const [error,setError]=useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevalues) => {
      return {
        ...prevalues,
        [name]: value,
      };
    });
  };

  
  async function postdata(){
    const userdata={
      username:values.username,
      password:values.password
    }
    try{
      setLoading(true)
    if(Object.values(values).includes("") === false){
      const usersdata = await axios.post('http://127.0.0.1:8000/account/login',userdata)
      localStorage.setItem('currentUser',JSON.stringify(usersdata.data))
      // console.log(localStorage.setItem('currentUser',JSON.stringify(usersdata.data)))
     
      setLoading(false)
      setSuccess(true)
      window.location.href = "/";
      // login()
    }
  }catch(error){
    console.log(error);
    setLoading(false)
    setError(true)
  }
}
const handleSubmit = (event) => {
  event.preventDefault();
  postdata()
  console.log('hi hello')
  // console.log(values);
  // console.log(data);
  setValues({
    username: "",
    password: "",
  });
};
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      }}
      });

  return (
    <div style={{marginTop:'-90vh'}}>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"   sx={{
            borderRadius: "10px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            background:'#ECF9FF'
          }} >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom:'2rem',
            paddingTop:'2rem'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log-in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="UserName"
              name="username"
              autoComplete="username"
              autoFocus
              value={values.username}
              onChange={handleChange}
              variant='outlined'
              sx={{background:'white',borderRadius:'5px',
                   "& .css-c4rj4p-MuiFormLabel-root-MuiInputLabel-root":{
                    fontWeight:'bold'
                  }}}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              autoComplete="current-password"
              variant='outlined'
              sx={{background:'white',borderRadius:'5px',
                   "& .css-c4rj4p-MuiFormLabel-root-MuiInputLabel-root":{
                    fontWeight:'bold'
                  }}}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              disabled={
                !values.username ||
                !values.password
              }
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to={"/register"} variant="body2"
                style={{color:'black'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}