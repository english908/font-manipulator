noseX= 0;
noseY = 0;
difference =0 ;
left_wrist_X = 0;
right_wrist_X = 0;
function setup(){
   video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550 , 550 );
  canvas.position(500 , 150 );
  posenet = ml5.poseNet(video , modelLoaded);
  posenet.on('pose' , gotposes);
}
function gotposes(results){
if (results.length > 0 ){
   console.log(results);
  noseX=results[0].pose.nose.x;
  noseY=results[0].pose.nose.y;
  console.log("noseX = " + noseX + "noseY = " + noseY);
 left_wrist_X=results[0].pose.leftWrist.x;
 right_wrist_X=results[0].pose.rightWrist.x;
 difference = floor(left_wrist_X - right_wrist_X);
  console.log("left_wrist_X = " + left_wrist_X + "right_wrist_X = " + right_wrist_X + "difference"+  difference);
}
}
function modelLoaded(){
   console.log('PoseNet Is Loaded');
}
function draw(){
background("#7eede8");

document.getElementById("square_side").innerHTML = "Width and height of the square will be =" + difference + "px ";
fill("purple");
textSize(difference);
text("Maheen" , 50 , 400 );
}