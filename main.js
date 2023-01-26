music_1=""
music_2=""
leftWrist_x=0
leftWrist_y=0
rightWrist_x=0
rightWrist_y=0
scoreLeftWrist=0;
scoreRightWrist=0;
function preload(){
    music_1=loadSound("music.mp3")
    music_2=loadSound("music2.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modalloaded);
    poseNet.on('pose',gotposes);
}
function modalloaded(){
    console.log("modal is loaded")
}
function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("black")
    if(scoreLeftWrist>scoreRightWrist){
        music_1_variable.isPlaying()
        circle(leftWrist_x,leftWrist_y,20)
        
    }else{
        music_2_variable.isPlaying()
        circle(righttWrist_x,rightWrist_y,20)
    }
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        rightWrist_x=results[0].pose.rightWrist.x
        rightWrist_y=results[0].pose.rightWrist.y
        console.log("rightWristX= "+rightWrist_x+" and rightWristY= "+rightWrist_y)
        leftWrist_x=results[0].pose.leftWrist.x
        leftWrist_y=results[0].pose.leftWrist.y
        console.log("left wrist x= "+leftWrist_x+"and left wrist Y= "+leftWrist_y)
        scoreLeftWrist=results[0].pose.keypoints[9].score;
    scoreRightWrist=results[0].pose.keypoints[10].score;
    console.log("score of left wrist= "+scoreLeftWrist+"and score of right wrist= "+scoreRightWrist);
    }
}