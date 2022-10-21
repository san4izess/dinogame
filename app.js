const dino = document.getElementById("dino")
let cactus = document.getElementById("cactus");

document.addEventListener ("keydown", function(event) {
    jump();
 });

 function jump () {
    if (dino.classList != "jump") {
       dino.classList.add("jump")
    }
   setTimeout( function() {
       dino.classList.remove("jump")
    }, 450)
}

let isAlive = setInterval (function(){
    let dinoTop = parseFloat(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))


    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      alert('GameOver')
    } 
    }, 10)