 function setup(){
     canvas=createCanvas(450,450);
     canvas.center();
     video=createCapture(VIDEO);
     video.hide();

     classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iqVROgz15/model.json",modelLoded);
     
 }

 function modelLoded(){
     console.log("Model Has Loaded!!! Bro, Are U Even LISTENING!? IF NOT, THEN LISTEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
 }


 function draw(){
image(video,0,0,450,450);
classifier.classify(video,gotResult)
 }
 function gotResult(error,results){
     if(error){
        console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("objectname").innerHTML=results[0].label;
         document.getElementById("objectaccuracy").innerHTML=results[0].confidence.toFixed(3);
     }
 }
