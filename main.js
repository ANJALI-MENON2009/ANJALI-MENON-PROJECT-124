noseX = 0 ;
noseY = 0 ;

rightWristX = 0 ;
leftWristX = 0 ;

rightWristY = 0 ;
leftWristY = 0 ;

function preload() {}

function setup() {
    video = createCapture(VIDEO) ;
    video.size(480,430) ;
    video.position(130,130);

    canvas = createCanvas(480,365) ;
    canvas.position(925, 167) ;

    posenet = ml5.poseNet(video, modelLoaded) ;
    posenet.on('pose' , gotPoses)
}

function modelLoaded() {
    console.log("Model is ready to be used!") ;
}

function gotPoses(results) {
    console.log(results) ;
}

function draw() {
    background('#ffdcba') ;
}
