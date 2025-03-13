let boxes = document.querySelectorAll('.box');
let resentbtn = document.querySelector("#reset-btn");
let newGame = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

let winningCondition = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetgame = () => {
    turnO = true;
    enableBoxes();
    newGame.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        
        if (turnO){
            box.innerText = 'O';
            turnO = false;
        }else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});


const disableBoxes = () => {
    for (let b of boxes){
        b.disabled = true;
    }
};

const enableBoxes = () => {
    for (let b of boxes){
        b.disabled = false;
        b.innerText = "";
    }
};

const showWinner = (winner) => {
    newGame.innerText = `Congratulations!, winner is ${winner}`;
    newGame.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for (let pattern of winningCondition){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};


resentbtn.addEventListener("click", resetgame);