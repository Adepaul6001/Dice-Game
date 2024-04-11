let randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6 ;
randomNumber1 = Math.floor(randomNumber1) + 1;

let randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6 ;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelector(".firstimg").setAttribute("src", "./images/dice" + randomNumber1 + ".jpg");
document.querySelector(".secondimg").setAttribute("src", "./images/dice" + randomNumber2 + ".jpg");


function refresh(){
    if( randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player one wins😁";
    } 
    else if( randomNumber2 > randomNumber1){
       document.querySelector("h1").innerHTML = "Player two wins 😁";
    }
    else if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Draw 🤝";
    }
}
refresh();

document.querySelector("button").addEventListener("click",()=>{
    window.location.reload();
})
