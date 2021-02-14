import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth } from '../firebase';
import { ReactComponent as Logo } from './logo.svg';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    backgroundColor: '#F8F8F8',
  },
  whiteText: {
    color: '#f8f8f8',
  },
  background: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `linear-gradient(to right, #3553ae, #6394dd)`,
  },
  registerBtn: {
    color: '#6ED3C4',
    border: '3px solid #6ED3C4',
    filter: 'drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25))',
    background: 'none',
    borderRadius: 10,
  },
}));

function Copyright() {
  return (
    <Typography variant='body2' style={{ color: '#f8f8f8' }} align='center'>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        PhysYou
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      alert('Error signing in with email and password');
    });
  };

  return (
    <div className={classes.background}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Box>
          <Logo style={{ width: 600 }} />
          </Box>
          <Typography component='h1' variant='h5' style={{ color: '#f8f8f8'}}>
            Log in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              InputLabelProps={{
                style: { color: '#6394dd' },
              }}
              className={classes.input}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(evt) => setEmail(evt.target.value)}
            />
            <TextField
              InputLabelProps={{
                style: { color: '#6394dd' },
              }}
              className={classes.input}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(evt) => setPassword(evt.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              style={{ background: '#6ed3c4', color: '#f8f8f8' }}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Box textAlign='center'>
              <Link href='#' variant='subtitle1' className={classes.whiteText}>
                Forgot password?
              </Link>
            </Box>
            <Box mt={3}>
                <Button
                href='/signup'
                type='submit'
                fullWidth
                variant='contained'
                className={classes.registerBtn}
                >
                Sign up
                </Button>
            </Box>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
