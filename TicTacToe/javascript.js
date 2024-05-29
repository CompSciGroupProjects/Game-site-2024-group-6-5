var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
var player = 1;
var winner = false;
var mode = 2;

function setMode(selectedMode) {
    mode = selectedMode;
    reset();
    turn();
}


function Add(row, col) {
    if (!winner && board[row][col] === 0) {
        if (player === 1)
            document.getElementById("" + row + "" + col).innerHTML = "X";
        else

            document.getElementById("" + row + "" + col).innerHTML = "O";
        board[row][col] = player;
        if (checkwin(player)) {

            display.innerHTML = "Game Over";
            winner = true;
            setTimeout(Alert1, 100);
            return;
        }
        if(checkTie()){
            display.innerHTML = "Game Over";
            setTimeout(Alert2, 100);
            return;
        }
        player = player % 2 + 1;
        turn();
        if (mode === 1 && player === 2 && !winner) {
            setTimeout(computerMove, 10);

        }
    }

}


function Alert1() {
    alert((player === 1 ? "Player 1" : "Player 2") + " wins!");
}

function Alert2() {
    alert("Tie!");
}

function reset() {
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            document.getElementById("" + row + "" + col).innerHTML = " ";
            board[row][col] = 0;
        }
    }
    winner = false;
    player = 1;
    turn()
}

function turn() {
    var display = document.getElementById("display");
    if (checkwin(player)) {
        display.innerHTML = "Game Over";


    } else {
        display.innerHTML = "Player " + player + "'s turn";
        if (mode === 1 && player === 2) {
            display.innerHTML = "Computer's turn";
        }

    }

}

function computerMove() {
    let moves = [];
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === 0) {
                moves.push({row: row, col: col});
            }
        }
    }
    if (moves.length > 0) {
        let move = moves[Math.floor(Math.random() * moves.length)];
        Add(move.row, move.col);
    }


}

function checkTie(){
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {

            if(board[row][col] ===0){
                return false;
            }

        }
    }
        return true;
}



function checkwin(localPlayer) {
    for (var row = 0; row < 3; row++) {
        if (board[row][0] === localPlayer && board[row][1] === localPlayer && board[row][2] === localPlayer) {
            return true;
        }
    }
    for (var col = 0; col < 3; col++) {
        if (board[0][col] === localPlayer && board[1][col] === localPlayer && board[2][col] === localPlayer) {
            return true;
        }
    }
    if (board[0][0] === localPlayer && board[1][1] === localPlayer && board[2][2] === localPlayer) {
        return true;
    }
    if (board[0][2] === localPlayer && board[1][1] === localPlayer && board[2][0] === localPlayer) {
        return true;
    }
    return false;
}