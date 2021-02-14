import {getAngle, PartsEnum} from "./utils";



export default class FrontalFlyRight {

    constructor(){
        this.numberOfSteps = 2;
        this.currentStep = 0;
        this.currentCount = 0;
    }

    perform_exercise(joints) {
        const right_shoulder = joints[PartsEnum.right_shoulder];
        const right_elbow = joints[PartsEnum.right_elbow];
        const right_hip = joints[PartsEnum.right_hip];

        const angle = getAngle(right_shoulder, right_hip, right_elbow )

        if([right_shoulder, right_elbow, right_hip].filter(item => item.visibility < 0.5).length !== 0){
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
