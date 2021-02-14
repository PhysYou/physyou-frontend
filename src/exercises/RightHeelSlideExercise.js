import {getAngle, PartsEnum} from "../utils";

export default class RightHeelSlideExercise {

    constructor(){
        this.numberOfSteps = 2;
        this.currentStep = 0;
        this.currentCount = 0;
    }

    perform_exercise(joints) {

        if(!joints || joints.length == 0){
            return {currentCount: this.currentCount, feedback: "Please position yourself infront of the camera"};
        }

        const right_hip = joints[PartsEnum.right_hip];
        const right_knee = joints[PartsEnum.right_knee];
        const right_ankle = joints[PartsEnum.right_ankle];

        const angle = Math.abs(getAngle(right_hip, right_knee, right_ankle))



        if([right_hip, right_knee, right_ankle].filter(item => item.visibility < 0.2).length !== 0){
            return {currentCount: this.currentCount, feedback: "make sure limbs are visible"};
        }
        console.log(angle)
        switch(this.currentStep){
            case 0:
                if(angle < 100){
                    this.currentStep = 1
                    this.currentCount += 1
                    return {currentCount: this.currentCount, feedback: "Good Job"}
                } else {
                    return {currentCount: this.currentCount, feedback: "keep moving your ankles outwards"}
                }
            case 1:
                if( angle > 120){
                    this.currentStep = 0
                    return {currentCount: this.currentCount, feedback: "Good Job"}
                } else {
                    return {currentCount: this.currentCount, feedback: "keep moving your ankles inwards"}
                }
        }
    }
}
