var contianer = document.getElementById("contianer");
var rows = 6;
var cols = 7;
var end = [];
var smallDives;
var playerYellow = "Y";
var playerRed = "R";
var currentPlayer = playerYellow;
var con;
var colDiv;
var currColumns = [];
currColumns = [6, 6, 6, 6, 6, 6, 6];
gameOver = false;
var enable = false;
con = [];
for (var i = 0; i <rows; i++) {
    var row = [];
    colDiv = document.createElement("div");
    colDiv.classList.add("colDiv");
    contianer.appendChild(colDiv);
    colDiv.id = i.toString();
    for (var j = 0; j < cols; j++) {
        row.push(' ')
        smallDives = document.createElement("div");
        smallDives.classList.add("divs");
        smallDives.id = i.toString() + "-" + j.toString();
        colDiv.addEventListener("click", addingColors);
        colDiv.appendChild(smallDives);
    }
    con.push(row);

}
var cursor = document.getElementById("cursor");
document.onmousemove = function move(e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
}

showYellowPlayer(true);
var r;
function addingColors() {
    if (gameOver) {
        return;
    }
    var c = this.id;

    console.log("col div num is " + c);

    r = currColumns[c];
    if (r < 0) {
        return;
    }
    con[c][r] = currentPlayer;
    smallDives.id = c.toString() + "-" + r.toString();
    var disc = document.getElementById(smallDives.id);
    console.log("small divs id is " + smallDives.id);
    if (currentPlayer == playerRed) {
        //showYellowPlayer(true)
       // cursor.style.backgroundColor = "red";
        disc.classList.add("red");
       // showRedPlayer(true);
        cursor.style.backgroundColor = "yellow";
        showYellowPlayer(true)
        currentPlayer = playerYellow;

    }
    else {
        //cursor.style.backgroundColor = "yellow";
        //showYellowPlayer(true)
        disc.classList.add("yellow");
        cursor.style.backgroundColor = "red";
        showRedPlayer(true);
        currentPlayer = playerRed;

    }
    r--;

    currColumns[c] = r;

    checkWinner();
}

function checkWinner() {
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols - 3; c++) {
            if (con[r][c] != ' ') {
                if (con[r][c] == con[r][c + 1] && con[r][c + 1] == con[r][c + 2] && con[r][c + 2] == con[r][c + 3]) {
                    play();
                    setWinner(r, c);
                    return;
                }
            }
        }
    }


    for (var c = 0; c < cols; c++) {
        for (var r = 0; r < rows - 3; r++) {
            if (con[r][c] != ' ') {
                if (con[r][c] == con[r + 1][c] && con[r + 1][c] == con[r + 2][c] && con[r + 2][c] == con[r + 3][c]) {
                    play();
                    setWinner(r, c);
                    return;
                }
            }
        }
    }


    for (var r = 0; r < rows - 3; r++) {
        for (var c = 0; c < cols - 3; c++) {
            if (con[r][c] != ' ') {
                if (con[r][c] == con[r + 1][c + 1] && con[r + 1][c + 1] == con[r + 2][c + 2] && con[r + 2][c + 2] == con[r + 3][c + 3]) {
                    play();
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    for (var r = 3; r < rows; r++) {
        for (var c = 0; c < cols - 3; c++) {
            if (con[r][c] != ' ') {
                if (con[r][c] == con[r - 1][c + 1] && con[r - 1][c + 1] == con[r - 2][c + 2] && con[r - 2][c + 2] == con[r - 3][c + 3]) {
                    play();
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

}

function setWinner(r, c) {

    if (con[r][c] == playerRed) {
        showWinnerR();

    } else {
        showWinnerY();

    }
    gameOver = true;
}
var mu
function play() {
    mu = document.getElementById("musicWinner");
    stopMusic();
    mu.play();
}

var playerRed;
function showRedPlayer(enable) {
    if (enable == true) {
        playerRed = document.getElementById("redPlayer")
        playerRed.classList.replace("yellowPlayerNeon", "redPlayerNeon");
        playerRed.innerHTML = "Red Player";
    }

}


function showYellowPlayer(enable) {
    if (enable == true) {
        playerRed = document.getElementById("redPlayer")
        playerRed.classList.add("yellowPlayerNeon");
        playerRed.innerHTML = "Yellow Player";
    }

}
var winner;
function showWinnerY() {
    playerRed = document.getElementById("redPlayer");
    playerRed.innerHTML = " ";
    winner = document.getElementById("winner")
    winner.classList.add("winnerNeon");
    winner.innerHTML = "Yellow Wins";
}

function showWinnerR() {
    playerRed = document.getElementById("redPlayer");
    playerRed.innerHTML = " ";
    winner = document.getElementById("winner")
    winner.classList.add("winnerNeon");
    winner.innerHTML = "Red Wins";
}

function playMusic() {
    var song = document.getElementById("music2");
    song.play();
}
function stopMusic() {
    var song = document.getElementById("music2");
    song.pause();
}

