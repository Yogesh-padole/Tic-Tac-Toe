let started = false;
let oturn=false;
let xturn=false;

let h3 =document.querySelector("h3");
let h4 = document.querySelector("h4");
let btns = document.querySelectorAll("#cell");

function presskey(){
btns.forEach(btn=>{
    btn.innerHTML=" ";
    h4.innerHTML=" ";
    btn.addEventListener("click",function(){
        if(xturn==false){
        btn.innerHTML="x";
        xturn=true;
        oturn = false;
        console.log("x is pressed");
        btn.classList.add("x");
            
        }

        else if(oturn==false && btn.innerHTML==" "){
            btn.innerHTML="o"
            btn.classList.add("o");
            console.log("o is pressed");
            oturn=true;
            xturn=false;
        }
        wincheck();

       
    });
   
});
}


addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        console.log("game started");
        h3.innerText="Game started";
        started=true;
        presskey();
        wincheck();
        
            
    }
});


function wincheck(){

let winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


for (let wc of winconditions) {
    let v0 = btns[wc[0]].innerHTML;
    let v1 = btns[wc[1]].innerHTML;
    let v2 = btns[wc[2]].innerHTML;

    if (v0 !== " " && v0 === v1 && v1 === v2) {
        console.log("win");
        h3.innerText = v0 + " wins!";
        document.querySelector("h3").style.color="blue";
        document.querySelector("h3").style.fontSize="30px";
        started=false;
        reset();
        return;
    }
   // Check for draw condition
   let draw = true;
   btns.forEach(btn => {
       if (btn.innerHTML === " ") {
           draw = false;
       }
   });

   if (draw) {
       console.log("draw");
       h3.innerText = "It's a draw!";
       document.querySelector("h3").style.color="blue";
       document.querySelector("h3").style.fontSize="30px";
       reset();
       started=false;
   }
}
}

function reset(){
    setTimeout(() =>location.reload() , 1500);  
}











