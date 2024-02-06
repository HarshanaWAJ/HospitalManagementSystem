import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {motion}  from 'framer-motion';
import MediCare from '../assets/images/icons/MediCare.ico';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} style={{paddingBottom:'100px',}}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Medi Care
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
  
const defaultTheme = createTheme();

  export default function LoginPage() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };  

    return (
      <motion.section id='login' className='login'
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }} 
      transition={{ duration: 0.5 }} 
      >
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{backgroundColor:'inherit', paddingTop:'40px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        > 
          <img src={MediCare} alt='icon' style={{ height: '150px', width: '150px', marginTop:'50px'}}/>

          <Typography component="h1" variant="h5" style={{
            fontFamily:'Times new Roman', 
            fontSize:'40px',
            fontWeight:'600',
            letterSpacing:'2px'
            }}>
            Medi Care
          </Typography>
          <Typography component="h1" variant="h5" style={{
            fontFamily:'Times new Roman', 
            fontSize:'30px',
            fontWeight:'400',
            letterSpacing:'2px'
            }}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </motion.section>
  );
  }
  