## Inspiration
How many times have you been prescribed exercises by a physical therapist, but have not completed them before your next visit?

According to the [Spine Journal](https://www.physio-pedia.com/Adherence_to_Home_Exercise_Programs#cite_note-:0-1), a peer-reviewed medical journal on the spine, non-adherence to home exercises programs reaches 50-65% for general musculoskeletal conditions. Patients with low back pain reaches 50-70% in terms of non-adherence to prescribed home exercises. 

The pandemic emphasized the problem of physical therapists in adapting to a more digitized service. According to the [American Physical Therapy Association’s report on the impact of COVID-19 on the physical therapy profession](https://www.apta.org/contentassets/15ad5dc898a14d02b8257ab1cdb67f46/impact-of-covid-19-on-physical-therapy-profession.pdf) , in July 2020, only around 13% of physical therapist  were providing telehealth to more than 10 patients per week and 32% were seeing less than one patient per week on average via telehealth.

This is a problem that needs to be mitigated as the evolution of the pandemic and vaccination campaign is currently a worldwide challenge. 

The most vulnerable individuals during the COVID-19 Pandemic are the elderly and the individuals who have to go through emergent surgery. One common part of this most vulnerable group of people is that a high percentage of them have to receive Physical Therapy in order to get back to their lives. This project helps the most vulnerable group of people which lack immunity.

## What it does
physyou is an asynchronous Telehealth platform for physical therapists to prescribe physical exercises, monitor the accuracy and completion rate of prescribed exercises. Patients can access the prescribed exercises and record their attempts in completing the exercise to verify the accuracy of their completed exercise.
 
## Key Features
- We give live feedback by using their webcam & our Computer Vision as patients complete their exercises.
- Physical therapist can prescribe new exercises for patients to complete.
- Patients and physical therapists  will see the list of prescribed exercises and estimated duration to complete the set of exercises along with.
- Patients and Physical therapists  can verify the accuracy of the completed exercise based on comparison between uploaded video of completed exercise and exercise completed with 100% accuracy.

## How we built it
In order to build the computer vision capabilities we used Google's pose estimation model [BlazePose](https://ai.googleblog.com/2020/08/on-device-real-time-body-pose-tracking.html)  through an ML library specialized in live video use cases called MediaPipe. During an exercise we use a state machine to know in what step of the exercise the user is in and add one to the repetition counter when they complete a cycle.
The frontend user interface was built with React and styled with CSS. 

## Challenges we ran into
We had to pick the most efficient way to count reps as well as the highest frame per second platform to solve our problem. At first, We used Can’s custom ResNet50 and hosted that on GoogleCloud, did the computer vision rep count and exercise analysis in the cloud but then we realized that there would be minor lags and decided to follow MediaPipe on-the-browser image analysis. 
On the frontend, the challenge was to work fast and meet the design requirements.

## Accomplishments that we're proud of
We are proud that we have tried different methods in accomplishing this Computer Vision task and choose the most efficient method to achieve it. We are proud of our website with live video processing capabilities that makes Google MediaPipe and Google Firebase. 

We are proud of having the most distributed team on the hackathon from 4 different timezones and countries: Puerto Rico, Italy, Turkey and Taiwan. The sun never sets in our group!!

## What we learned
We have learned how to host Computer Vision models in the cloud as well as some of the limitations of Cloud based live video processing and in browser video processing. We have learned a lot throughout this hackathon such as the ethics behind our actions and we choose to explore how many body types that Google MediaPipe supports. 

## What's next for physyou
We envision our platform to complement the physical therapist’s live therapy sessions in terms of monitoring the progress of the patient and adjusting exercises according to the patient's needs. We also see our platform creating more accountability for the patient in terms of completing the and monitoring the accuracy of prescribed exercises.

This platform is especially useful for the elderly and for patients who went through emergent surgery. This particular group are among the most vulnerable people against COVID-19 and lack the necessary immunity. Therefore this website would be really helpful to them as they would be doing their exercises from home without the need of a Physical Therapist travelling to their houses.

## Built With
MediaPipe, React, CSS, Material-UI, Google Firebase, BlazePose, Netlify

## How to run?

After cloning the repo run:
``npm install``
``npm start``
