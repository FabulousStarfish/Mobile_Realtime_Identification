function setup(){
    canvas=createCanvas(350,325);
    /*canvas.position(590,210)*/
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
    classification=ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
    console.log("MODAL LOADED !");
}
function draw(){
    image(video,0,0,350,325);
    classification.classify(video,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}