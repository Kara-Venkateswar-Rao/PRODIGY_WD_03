let btns = document.querySelectorAll(".box");
let reset =  document.querySelector("#reset");


let img = ["cross.png", "round.png"];

const wins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

reset.addEventListener('click', () => {
    btns.forEach((btn) =>{
        btn.innerText = "";
        btn.disabled = false;
    })
});


let track = true;
btns.forEach((btn) => {
    btn.addEventListener('click', () =>{
        if(track){
            btn.innerText = "0";
            track = false; 
        }   
        else{ 
            btn.innerText = "X"; 
            track = true;
        }
        btn.disabled = true
    })

})


