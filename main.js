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
}
}
function modelLoaded(){
    console.log('PoseNet Is Loaded');
}
function draw(){
 background("#7eede8");   
}