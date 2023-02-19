nosex = 0;
nosey = 0;
function preload()
{
}
function setup()
{
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide;
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw()
{
image(video, 0, 0, 300, 300);
}
function takeSnapshot()
{
    save('filterimage.png');
}
function modelLoaded()
{
    console.log("posenet module is initialized");
}
function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("nosex = " + nosex + " | nosey = " + nosey);
}
}