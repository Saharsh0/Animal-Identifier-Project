//https://teachablemachine.withgoogle.com/models/esgBR3bNO/

startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/esgBR3bNO/',modelReady)
}

modelReady()
{
    classifier.classify(gotResults);
}

gotResults(error, results)
{
    console.log(gotResult)
}