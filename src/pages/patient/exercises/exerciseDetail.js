import React, {useContext, useEffect, useState} from 'react';
import { Box } from '@material-ui/core';
import SideBar from '../../../shared/sideBar';
import ExerciseCard from '../../../shared/exerciseCard';
import {firestore} from "../../../firebase";
import {UserContext} from "../../../providers/UserProvider";

export default function ExerciseDetail({match}) {
    const [exercise, setExercise] = useState(null);
    const {exerciseId} = match.params;
    const user = useContext(UserContext);

    useEffect(async () => {
        let ex = await firestore.collection('exercises').doc(exerciseId).get()
        setExercise(ex.data());
    }, [])
  return (
    <>
      <Box display='flex' flexDirection='row'>
        <SideBar personId={user?.doctor ?? null}/>
        <Box p={8}>
          <ExerciseCard exercise={exercise} exerciseId={exerciseId}/>
        </Box>
      </Box>
    </>
  );
}
