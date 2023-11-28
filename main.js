leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
leftWristscore=0;
rightWristscore=0;
function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3;")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);
}
function modelloaded(){
    console.log("modelloaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        leftWristscore=results[0].pose.keypoints[9].score;
console.log(leftWristscore);
    }
}
function draw()
{
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
    if(leftWristscore>0.2){
    circle(leftWristX,leftWristY,20);
   inNumberleftWristY=Number(leftWristY);
   remove_decimals=floor(inNumberleftWristY);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="Volume= "+volume;
song.setVolume(volume);

if(rightWristscore>0.2){
    circle(rightWristX,rightWristY,20);
   inNumberrightWristY=Number(rightWristY);
   remove_decimals=floor(inNumberrightWristY);
speed=remove_decimals/500;
document.getElementById("speed").innerHTML="Speed= "+speed;
song.setVolume(speed);

    }
    }
}
function song_name(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
