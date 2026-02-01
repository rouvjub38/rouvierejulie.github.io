const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;
let board = ["","","","","","","","",""];

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];

cells.forEach(cell => {
    cell.addEventListener("click", cellClick);
});

function cellClick(e) {
    const index = e.target.dataset.index;

    if (board[index]!==""|| !gameActive) return;

    board[index]=currentPlayer;
    e.target.textContent = currentPlayer;

    checkWinner();
}

function checkWinner() {
    let roundWon = false;

    for (let condition of winConditions) {
        const [a,b,c]=condition;
        if (
            board[a]&&
            board[a]===board[b]&&
            board[a]===board[c]
        ) {
            roundWon=true;
            break;
        }
    }
    if(roundWon){
        statusText.textContent=`Le joueur ${currentPlayer} a gagné !`;
        gameActive=false;
        return;
    }
    if(!board.includes("")) {
        statusText.textContent="Match nul !";
        gameActive= false;
        return;
    }
    currentPlayer=currentPlayer==="X"? "O":"X";
    statusText.textContent=`Au tour de ${currentPlayer}`;
}

function resetGame() {
    board = ["","","","","","","","",""];
    gameActive=true;
    currentPlayer="X";
    statusText.textContent="Au tour de X";

    cells.forEach(cell=>cell.textContent="");
}
