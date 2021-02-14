import {getAngle} from "./utils";

const PartsEnum = {right_shoulder: 12, right_elbow: 14, right_wrist: 16}

export default class RightBicepCurlExercise {

    constructor(){
        this.numberOfSteps = 2;
        this.currentStep = 0;
        this.currentCount = 0;
    }

    perform_exercise(joints) {
        const right_shoulder = joints[PartsEnum.right_shoulder];
        const right_elbow = joints[PartsEnum.right_elbow];
        const right_wrist = joints[PartsEnum.right_wrist];

        const angle = getAngle(right_shoulder, right_elbow, right_wrist)

        if([right_shoulder, right_elbow, right_wrist].filter(item => item.visibility < 0.5).length !== 0){
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
