document.addEventListener("DOMContentLoaded", function() {
    let goButton = document.getElementById("go-button");
    goButton.addEventListener('click', runGame);
})

function runGame(){
    //first add event listeners to each colour button//
    let colourButtons=document.getElementsByClassName('colour-button');
    for (let button of colourButtons){
        button.addEventListener('click',function(){
           let colour=this.Id;
           console.log(colour);
        })
    }
    
}

/**
 * Creates an array of length n, consisting of randomly chosen numbers from 1 to 4, 
 * representing colours red, blue, green, yellow.
 */
function createSequence(n){
    correctSequence = [];
    for (let i=0;i<n;i++){
        correctSequence.push(Math.floor(4*Math.random())+1);
    }
    return correctSequence;
}

function compareSequence(){

}

function updateCurrentScore(){

}

function updateHighScore(){

}