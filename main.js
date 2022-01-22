status='';
function preload(){

}

function setup(){
    canvas=creatCanvas(400,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    ojectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML='Status: Detecting Objects';
    object_name=document.getElementById('Object_Name').innerHTML;
}

function modelLoaded(){
    console.log('Model is Loaded!');
    status=true;
}

function draw(){
    image(video,0,0,400,450);
}