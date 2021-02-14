import React from 'react';
import {
  Button,
  Typography,
  Paper,
  Box,
  TextField,
  makeStyles,
  fade,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  exerciseCard: {
    width: '50vw',
    height: '75vh',
    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.15)',
  },
  startBtn: {
    textTransform: 'none',
    fontSize: '20px',
    width: '160px',
    backgroundColor: '#6ed3c4',
    color: '#ffffff',
    border: '3px solid #6ed3c4',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: fade('#6ed3c4', 0.7),
    },
  },
  formControl: {
    minWidth: 120,
  },
}));

function ExerciseForm() {
  const classes = useStyles();

  const handleClose = () => {
    console.log('Close');
  };

  return (
    <div>
      <Paper className={classes.exerciseCard}>
        <Box p={6}>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='h4'>Add New Exercise</Typography>
            <ClearIcon
              onClick={handleClose}
              fontSize='large'
              style={{ fill: '#6ed3c4', cursor: 'pointer' }}
            />
          </Box>
          <Box mt={3}>
            <TextField
              id='outlined'
              label='Exercise Name'
              variant='outlined'
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box mt={3} display='flex' justifyContent='space-between'>
            <TextField
              id='outlined-number'
              label='Repetitions'
              type='number'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-number'
              label='Duration'
              type='number'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='intensity-select'>Intensity</InputLabel>
              <Select
                labelId='intensity-select'
                id='intensity-select'
                label='Intensity'
              >
                <MenuItem value='High'>High</MenuItem>
                <MenuItem value='Medium'>Medium</MenuItem>
                <MenuItem value='Low'>Low</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mt={3}>
            <TextField
              id='outlined-multiline-static'
              InputLabelProps={{
                shrink: true,
              }}
              label='Instruction/Notes'
              multiline
              variant='outlined'
              fullWidth
              rows={5}
            />
          </Box>
          <Box mt={3} display='flex' justifyContent='flex-end'>
            <input
              style={{ display: 'none' }}
              id='contained-button-file'
              type='file'
            />
            <label htmlFor='contained-button-file'>
              <Button variant='contained' color='primary' component='span'>
                Upload Video
              </Button>
            </label>
          </Box>
          <Box display='flex' justifyContent='flex-end' mt={3}>
            <Button className={classes.startBtn}>Add Exercise</Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default ExerciseForm;
