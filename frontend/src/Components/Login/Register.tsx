import * as React from "react";
import {useState} from 'react'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios';


export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success,setSuccess]= useState(false);
  
  const [values, setValues] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
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
 
  async function postdata (){
    const userdata={
      username:values.username,
      email:values.email,
      password1:values.password1,
      password2:values.password2
    }
    try{
      setLoading(true)
    if(Object.values(values).includes("") === false){
      await axios.post('http://127.0.0.1:8000/account/signup',userdata) 
      .then(res=>console.log(res.data))
      setLoading(false)
      setSuccess(true)
    }}catch(error){
        console.log(error);
        setLoading(false)
        setError(true)
    }
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
     postdata()

    setValues({
      username: "",
      email: "",
      password1: "",
      password2: "",
    });
  };
      const theme = createTheme({
        palette: {
          primary: {
            main: "#000000",
          }}
          });


  return (
    
    <div style={{ marginTop: "-97vh" }}>
  
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            borderRadius: "10px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            background:'#ECF9FF'
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "2rem",
              paddingTop: "2rem",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="UserName"
                    value={values.username}
                    onChange={handleChange}
                    variant='outlined'
                    autoFocus
                    sx={{background:'white',borderRadius:'5px',
                  "& .css-c4rj4p-MuiFormLabel-root-MuiInputLabel-root":{
                    fontWeight:'bold'
                  }}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    variant='outlined'
                    autoComplete="email"
                    sx={{background:'white',borderRadius:'5px',
                   "& .css-c4rj4p-MuiFormLabel-root-MuiInputLabel-root":{
                    fontWeight:'bold'
                  }}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password1"
                    label="Password"
                    type="password"
                    id="password"
                    value={values.password1}
                    onChange={handleChange}
                    variant='outlined'
                    autoComplete="new-password"
                    sx={{background:'white',borderRadius:'5px',
                   "& .css-c4rj4p-MuiFormLabel-root-MuiInputLabel-root":{
                    fontWeight:'bold'
                  }}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password2"
                    label="Confrim-Password"
                    type="password"
                    id="password2"
                    value={values.password2}
                    onChange={handleChange}
                    variant='outlined'
                    autoComplete="new-password"
                    sx={{background:'white',borderRadius:'5px',
                   "& .css-c4rj4p-MuiFormLabel-root-MuiInputLabel-root":{
                    fontWeight:'bold'
                  }}}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
              </Grid>
              <Button
                disabled={
                  !values.username ||
                  !values.email ||
                  !values.password1 ||
                  !values.password2
                }
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link style={{color:'black'}} to="/login" variant="body2">
                    Already have an account? Sign in
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
