import React, {useState} from 'react';
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
import {useHistory} from "react-router-dom";
import {firestore} from "../firebase";

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

function ExerciseForm({patientId, handleClose, selectedDate}) {
  const classes = useStyles();
  const history = useHistory();

  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState(10);
  const [duration, setDuration] = useState(5);
  const [intensity, setIntensity] = useState('Medium');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    let exerciseRef = firestore.collection('exercises');
    await exerciseRef.add({
      exerciseName: exercise,
      reps,
      duration,
      intensity,
      description,
      patient: patientId,
      completed: false,
      date: selectedDate.toLocaleDateString()
    })
    setExercise('');
    setReps(10);
    setDuration(5);
    setIntensity('Medium');
    setDescription('');
    handleClose();
  }

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
            <FormControl variant='outlined' fullWidth>
              <InputLabel id='name-select'>Exercise Name</InputLabel>
              <Select
                  labelId='name-select'
                  id='name-select'
                  label='Exercise Name'
                  onChange={(evt) => setExercise(evt.target.value)}
              >
                <MenuItem value='Frontal Fly Left'>Frontal Fly Left</MenuItem>
                <MenuItem value='Frontal Fly Right'>Frontal Fly Right</MenuItem>
                <MenuItem value='Left Bicep Curl'>Left Bicep Curl</MenuItem>
                <MenuItem value='Right Bicep Curl'>Right Bicep Curl</MenuItem>
                <MenuItem value='Right Heel Slide'>Right Heel Slide</MenuItem>
                <MenuItem value='Left Heel Slide'>Left Heel Slide</MenuItem>
                <MenuItem value='Standing Right Knee'>Standing Right Knee</MenuItem>
              </Select>
            </FormControl>
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
              value={reps}
              onChange={(evt) => setReps(evt.target.value)}
            />
            <TextField
              id='outlined-number'
              label='Duration'
              type='number'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              value={duration}
              onChange={(evt) => setDuration(evt.target.value)}
            />
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='intensity-select'>Intensity</InputLabel>
              <Select
                labelId='intensity-select'
                id='intensity-select'
                label='Intensity'
                value={intensity}
                onChange={(evt) => setIntensity(evt.target.value)}
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
              onChange={(evt) => setDescription(evt.target.value)}
            />
          </Box>
          <Box display='flex' justifyContent='flex-end' mt={3}>
            <Button className={classes.startBtn} onClick={handleSubmit}>Add Exercise</Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default ExerciseForm;
