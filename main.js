///https://teachablemachine.withgoogle.com/models/tEYyw6_17/
Webcam.set({
    Width:350,
    height:300,
    image_format: 'png',
    png_quality:90
})

camera =document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_IMAGE" src="'+data_uri+'"/>';
    });
}

function modelLoaded(){
    console.log('Model Loaded!');    
    }

    


function check(){
img=document.getElementById('captured_IMAGE');
classifier.classify(img, gotResult);
}

console.log('ml5 version:',ml5.version)
classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tEYyw6_17/model.json',modelLoaded);

function gotResult(error, result){
    if(error){
        console.error(error);
    } else {
        console.log(result)
        document.getElementById("result_name").innerHTML =result[0].label;
        document.getElementById("result_accuracy").innerHTML =result[0].confidence.toFixed(3);
    }
}