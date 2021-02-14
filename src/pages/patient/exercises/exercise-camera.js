import React, {useEffect, useMemo, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import RightBicepCurlExercise from "../../../exercises/RightBicepCurlExercise";
import "./exercise-camera.css";
import Box from "@material-ui/core/Box";
import ProgressBar from "../../../shared/progressBar";
import Button from "@material-ui/core/Button";
import FrontalFlyRight from "../../../exercises/FrontalFlyRight";
import FrontalFlyLeft from "../../../exercises/FrontalFlyLeft";
import LeftBicepCurlExercise from "../../../exercises/LeftBicepCurlExercise";
import RightHeelSlideExercise from "../../../exercises/RightHeelSlideExercise";
import StandUpRightKnee from "../../../exercises/StandUpRightKnee";
import {firestore} from "../../../firebase";
import {useHistory} from "react-router-dom";

export default function PatientCamera({match}){

    const {exerciseId} = match.params;
    const [exercise, setExercise] = useState(null);
    const history = useHistory();

    useEffect(async () => {
        let exerciseData = await firestore.collection('exercises').doc(exerciseId).get();
        setExercise(exerciseData.data())
    }, [])

    const exerciseMapping = {
        "Frontal Fly Left" : new FrontalFlyLeft(),
        "Frontal Fly Right": new FrontalFlyRight(),
        "Left Bicep Curl": new LeftBicepCurlExercise(),
        "Right Bicep Curl": new RightBicepCurlExercise(),
        "Right Heel Slide": new RightHeelSlideExercise(),
        "Standing Right Knee": new StandUpRightKnee(),
    }

    const exerciseObj = useMemo(() => {
        if(exercise){
            return exerciseMapping[exercise?.exerciseName]
        } else {
            return null
        }
    }, [exercise])
    const [reps, setReps] = useState(0);
    const [feedback, setFeedback] = useState('')

    useEffect(async () => {
        if(exercise){
            if(reps == exercise?.reps){
                let exerciseRef = firestore.collection('exercises').doc(exerciseId);
                await exerciseRef.update({completed: true});
                history.push('/patient')
            }
        }
    }, [exercise, reps])

    const onResults = (results, canvasCtx, canvasElement) => {
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(
            results.image,
            0,
            0,
            canvasElement.width,
            canvasElement.height
        );

        let exerciseState = exerciseObj.perform_exercise(results.poseLandmarks);

        setReps(exerciseState.currentCount);
        setFeedback(exerciseState.feedback);

        window.drawConnectors(canvasCtx, results.poseLandmarks, window.POSE_CONNECTIONS, {
            color: "#00FF00",
            lineWidth: 4
        });
        window.drawLandmarks(canvasCtx, results.poseLandmarks, {
            color: "#FF0000",
            lineWidth: 2
        });
        canvasCtx.restore();
    };
    //TODO: Handle no human errors by safe checking arrays
    useEffect(() => {
        if (!exerciseObj) return null;
        const videoElement = document.getElementsByClassName("input_video")[0];
        const canvasElement = document.getElementsByClassName("output_canvas")[0];
        const canvasCtx = canvasElement.getContext("2d");

        const pose = new window.Pose({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
            }
        });

        pose.setOptions({
            upperBodyOnly: false,
            smoothLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        pose.onResults((results) => onResults(results, canvasCtx, canvasElement));

        const camera = new window.Camera(videoElement, {
            onFrame: async () => {
                await pose.send({ image: videoElement });
            },
            width: 1280,
            height: 720
        });
        camera.start();
    }, [exerciseObj]);
    return (
        <Container>
            <Typography variant={'h4'} color={'primary'} style={{marginTop: '20px'}}>{exercise?.exerciseName}</Typography>

            <Box display='flex'>
                <div className="container">
                    <div className="feedback">{feedback}</div>
                    <video className="input_video"></video>
                    <canvas
                        className="output_canvas"
                        width="1280px"
                        height="720px"
                    ></canvas>
                </div>
                <Box display='flex' flexDirection='column'>
                    <ProgressBar current={Math.min(exercise?.reps ?? 0, reps)} max={exercise?.reps ?? 0}/>
                    <Button variant={'contained'} color={'secondary'} style={{marginBottom: '5px'}}>exit</Button>
                    <Button variant={'outlined'} color={'secondary'}>pause</Button>
                </Box>
            </Box>
        </Container>
    )
}
