import {getAngle, PartsEnum} from "../utils";

export default class StandUpRightKnee {

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

        const angle = getAngle(right_hip, right_knee, right_ankle)

        if([right_hip, right_knee, right_ankle].filter(item => item.visibility < 0.2).length !== 0){
            return this.currentCount;
        }

        console.log(angle)

        switch(this.currentStep){
            case 0:
                if(angle < 80){
                    this.currentStep = 1
                    this.currentCount += 1
                    return this.currentCount
                } else {
                    return this.currentCount
                }
            case 1:
                if(angle > 100){
                    this.currentStep = 0
                    return this.currentCount
                } else {
                    return this.currentCount
                }
        }
    }
}
