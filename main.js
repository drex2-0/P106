function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results); 
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="I can hear - " + results[0].label;
    
    img1=document.getElementById("animal_img");
    
    if(results[0].label=="Barking")
    {
        img1.src="dog.gif";
        
    }
    else if(results[0].label=="Meowing")
    {
        img1.src="cat.gif";
        
    } 
    
    
    else
    {
        img1.src="ear.gif";
       
    } }}