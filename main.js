//https://teachablemachine.withgoogle.com/models/esgBR3bNO/

var cat = 0
var dog = 0
var parrot = 0
var goat = 0

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/esgBR3bNO/model.json',modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error ) {
        console.error(error);
    }

     else{
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1
        g = Math.floor(Math.random() * 255) + 1
        b = Math.floor(Math.random() * 255) + 1

        animal_name = results[0].label;
        if(animal_name == "cat")
        {
            document.getElementById("result_label").innerHTML = "I can hear - " + animal_name;
            document.getElementById("animals").src = "cat.png";
        }

        else if(animal_name == "dog")
        {
            document.getElementById("result_label").innerHTML = "I can hear - " + animal_name;
            document.getElementById("animals").src = "dog.png";
        }

        else if(animal_name == 'parrot')
        {
            document.getElementById("result_label").innerHTML = "I can hear - " + animal_name;
            document.getElementById("animals").src = "parrot.png";
        }

        else if (animal_name == 'goat')
        {
            document.getElementById("result_label").innerHTML = "I can hear - " + animal_name;
            document.getElementById("animals").src = "goat2.png";
        }
    }
}
