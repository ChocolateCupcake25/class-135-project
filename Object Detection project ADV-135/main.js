status = '';
function preload() {

}

function setup() {
    canvas = createCanvas(400, 330);
    canvas.position(480, 270);
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    ojectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
    object_name = document.getElementById('Object_Name').innerHTML;
}

function modelLoaded() {
    console.log('Model is Loaded!');
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 480, 270, 400, 330);
    if (status != "") {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status_of_model").innerHTML = "Status : " + objects[i].confidence;
            document.getElementById("stauts_of_object_name").innerHTML =  objects[i].label;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}