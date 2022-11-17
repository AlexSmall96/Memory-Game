document.addEventListener("DOMContentLoaded", function() {
    let goButton = document.getElementById("go-button");
    goButton.addEventListener('click', runGame);
})

function runGame(){
    alert('You clicked go!');
}

/**
 * Randomly creates an array of length n, consisting of numbers 1-4, 
 * representing colours red, blue, green, yellow
 * 
 */
function createSequence(n){
    sequence = [];
    for (let i=0;i<n;i++){
        sequence.push(Math.floor(4*Math.random())+1);
    }
    return sequence;
}

function compareSequence(){

}

function updateCurrentScore(){

}

function updateHighScore(){

}