import React, {useEffect, useMemo, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import RightBicepCurlExercise from "../../exercises/RightBicepCurlExercise";
import "./exercise-camera.css";
import Box from "@material-ui/core/Box";
import ProgressBar from "../../shared/progressBar";
import Button from "@material-ui/core/Button";

export default function PatientCamera(){
    const exercise = useMemo(() => {
        return new RightBicepCurlExercise();
    }, [])
    const [reps, setReps] = useState(0);

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

        let s = exercise.perform_exercise(results.poseLandmarks);

        setReps(s);

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
    }, []);
    return (
        <Container>
            <Typography variant={'h3'} color={'primary'}>exercise name</Typography>

            <Box display='flex'>
                <div className="container">
                    <video className="input_video"></video>
                    <canvas
                        className="output_canvas"
                        width="1280px"
                        height="720px"
                    ></canvas>
                </div>
                <Box display='flex' flexDirection='column'>
                    <ProgressBar current={reps} max={10}/>
                    <Button variant={'contained'} color={'secondary'} style={{marginBottom: '5px'}}>exit</Button>
                    <Button variant={'outlined'} color={'secondary'}>pause</Button>
                </Box>
            </Box>
        </Container>
    )
}
