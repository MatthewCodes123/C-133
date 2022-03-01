img=""
cheeseStatus=""
objects=[]

function preload(){
    img=loadImage("dog_cat.jpg")
}

function setup(){
    canvas = createCanvas(640,420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd',modelNotLoaded)
    document.getElementById("status").innerHTML = "Status: Object Detecting"
}

function modelNotLoaded(){
console.log("Model Loaded")
cheeseStatus=true
objectDetector.detect(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
    
        console.log(results)
        objects=results
    
}

function draw(){
    image(img,0,0,640,420)
    fill("#FF0000")
    stroke("#FF0000")
    //strokeWeight(3)
    noFill()
    if(cheeseStatus){
    document.getElementById("status").innerHTML = "Status: Object Detected"
    for(i=0 ; i<objects.length; i++){
        percent = floor(objects[i].confidence * 100)
        text(objects[i].label+ " " + percent+"%",objects[i].x, objects[i].y)
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        stroke("#FF0000")
    }
}
}