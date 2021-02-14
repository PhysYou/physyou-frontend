import {getAngle, PartsEnum} from "../utils";

export default class FrontalFlyLeft {

    constructor(){
        this.numberOfSteps = 2;
        this.currentStep = 0;
        this.currentCount = 0;
    }

    perform_exercise(joints) {

        if(!joints || joints.length == 0){
            return {currentCount: this.currentCount, feedback: "Please position yourself infront of the camera"};
        }

        const left_shoulder = joints[PartsEnum.left_shoulder];
        const left_elbow = joints[PartsEnum.left_elbow];
        const left_hip = joints[PartsEnum.left_hip];

        const angle = Math.abs(getAngle(left_shoulder, left_hip, left_elbow))

        if([left_shoulder, left_elbow, left_hip].filter(item => item.visibility < 0.5).length !== 0){
            return {currentCount: this.currentCount, feedback: "make sure limbs are visible"};
        }
        console.log(angle)
        switch(this.currentStep){
            case 0:
                if(angle > 20){
                    this.currentStep = 1
                    this.currentCount += 1
                    return {currentCount: this.currentCount, feedback: "Good Job"}
                } else {
                    return {currentCount: this.currentCount, feedback: "keep moving your arm inwards"}
                }
            case 1:
                if(angle < 15){
                    this.currentStep = 0
                    return {currentCount: this.currentCount, feedback: "Good Job"}
                } else {
                    return {currentCount: this.currentCount, feedback: "keep moving your arm outwards"}

                }
        }
    }
}
