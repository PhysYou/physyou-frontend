import {getAngle, PartsEnum} from "../utils";

export default class RightBicepCurlExercise {

    constructor(){
        this.numberOfSteps = 2;
        this.prevCount = 0;
        this.currentStep = 0;
        this.currentCount = 0;
        this.startDate = new Date();
        this.badChunks = 0;

        setInterval(() => {
            let change = this.currentCount - this.prevCount;
            let rate = change / 1000;
            if(rate > 1.3){
                this.badChunks += 1;
            }
            this.prevCount = this.currentCount;
        }, 1000)

    }



    perform_exercise(joints) {
        const right_shoulder = joints[PartsEnum.right_shoulder];
        const right_elbow = joints[PartsEnum.right_elbow];
        const right_wrist = joints[PartsEnum.right_wrist];

        const angle = getAngle(right_shoulder, right_elbow, right_wrist)

        if([right_shoulder, right_elbow, right_wrist].filter(item => item.visibility < 0.2).length !== 0){
            return this.currentCount;
        }

        switch(this.currentStep){
            case 0:
                if(angle > 140){
                    this.currentStep = 1
                    this.currentCount += 1
                    return this.currentCount
                } else {
                    return this.currentCount
                }
            case 1:
                if(angle < 90){
                    this.currentStep = 0
                    return this.currentCount
                } else {
                    return this.currentCount
                }
        }
    }
}
