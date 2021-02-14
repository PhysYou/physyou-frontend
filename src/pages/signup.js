import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { auth, generateUserDocument } from '../firebase';
import { ReactComponent as Logo } from './logo.svg';

function Copyright() {
  return (
    <Typography variant='body2' style={{ color: '#f8f8f8' }} align='center'>
      {'copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        physyou
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function Signup() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await generateUserDocument(user, { firstName, lastName, type });
    } catch (error) {
      alert('Error signing up with email and password');
    }
  };

  return (
    <div className={classes.background}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Logo style={{ width: 600 }} />
          <Typography style={{ color: '#f8f8f8' }} component='h1' variant='h5'>
            sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.input}
                  InputLabelProps={{
                    style: { color: '#6394dd' },
                  }}
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='first name'
                  autoFocus
                  onChange={(evt) => setFName(evt.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.input}
                  InputLabelProps={{
                    style: { color: '#6394dd' },
                  }}
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='last name'
                  name='lastName'
                  autoComplete='lname'
                  onChange={(evt) => setLName(evt.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component='fieldset'>
                  <FormLabel component='legend' className={classes.whiteText}>
                    type
                  </FormLabel>
                  <RadioGroup
                    aria-label='type'
                    name='type'
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                  >
                    <FormControlLabel
                      value='doctor'
                      className={classes.whiteText}
                      control={<Radio color='primary' />}
                      label='doctor'
                    />
                    <FormControlLabel
                      value='patient'
                      className={classes.whiteText}
                      control={<Radio color='primary' />}
                      label='patient'
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  InputLabelProps={{
                    style: { color: '#6394dd' },
                  }}
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='email address'
                  name='email'
                  autoComplete='email'
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  InputLabelProps={{
                    style: { color: '#6394dd' },
                  }}
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </Grid>
            </Grid>
            <Box mt={3}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                style={{ background: '#6ed3c4', color: '#f8f8f8' }}
              >
                Sign Up
              </Button>
            </Box>
            <Grid container justify='flex-end'>
              <Grid item style={{ marginTop: '20px' }}>
                <Link
                  href='/login'
                  variant='body2'
                  style={{ color: '#f8f8f8' }}
                >
                  already have an account? sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={3}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
