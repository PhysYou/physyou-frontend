import {getAngle, PartsEnum} from "./utils";

export default class LeftBicepCurlExercise {

    constructor(){
        this.numberOfSteps = 2;
        this.currentStep = 0;
        this.currentCount = 0;
    }

    perform_exercise(joints) {
        const left_shoulder = joints[PartsEnum.left_shoulder];
        const left_elbow = joints[PartsEnum.left_elbow];
        const left_wrist = joints[PartsEnum.left_wrist];

        const angle = -1*getAngle(left_shoulder, left_elbow, left_wrist)

        if([left_shoulder, left_elbow, left_wrist].filter(item => item.visibility < 0.2).length !== 0){
            return {currentCount: this.currentCount, feedback: "make sure limbs are visible"};
        }

        switch(this.currentStep){
            case 0:
                if(angle > 140){
                    this.currentStep = 1
                    this.currentCount += 1
                    return {currentCount: this.currentCount, feedback: "Good Job"}
                } else {
                    return {currentCount: this.currentCount, feedback: "keep moving your hands outwards"}
                }
            case 1:
                if(angle < 90){
                    this.currentStep = 0
                    return {currentCount: this.currentCount, feedback: "Good Job"}
                } else {
                    return {currentCount: this.currentCount, feedback: "keep moving your hands inwards"}
                }
        }
    }
}
