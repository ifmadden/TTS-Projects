//I did not use player objects as much as I should've. Couldn't think of efficient ways to use them.
//Also feel like I fetched too many HTML elements. Maybe there's a better way to handle them than what I did.
let player1 = {name: ""};
let player2 = {name: ""};
let gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let boardStatus;
let rematchButton = document.getElementById("flexButton");
let welcomeContainer = document.getElementById("flexWelcome");
let welcomeButton = document.getElementById("welcomeButton");
let playerContainer = document.getElementById("flexNameForm");
let playerNamesSubmit = document.getElementById("submitButton");
let ticTacToeContainer = document.getElementById("flexTicTacToe");
let challengeContainer = document.getElementById("challenge");
let matchMessage = document.getElementById("matchMessage");
let newGameButton = document.getElementById("newGameButton");
let cellIndex;
let rowIndex;
let gameTable = document.getElementById('ticTacToeTable');
let cells = gameTable.getElementsByTagName("td");
let toggle = 0;

//This is the welcome function to the player upon visiting the page
function welcomeFunction(){
    welcomeButton.onclick = function(){
        welcomeContainer.style.display = "none";
        playerContainer.style.display = "flex";
        getPlayerNames();
    }
}

//This function retrieves the player names from the HTML form
 function getPlayerNames(){
    playerNamesSubmit.onclick = function(){
        player1.name = document.getElementById("p1Name").value;
        player2.name = document.getElementById("p2Name").value;
        playerContainer.style.display = "none";
        callOut();
    }
 }

 //This function contains the 3 second splash screen of Player 1 challenging Player 2
function callOut(){
    challengeContainer.style.display = "flex";
    challengeContainer.innerHTML = player1.name + " (X) challenges " + player2.name + " (O) to a game of Tic-Tac-Toe!";
    setTimeout(() => {
            challengeContainer.style.display = "none";
            ticTacToeContainer.style.display = "flex";
            newGameButton.style.display = "flex";
        }, 3000);
 }

//The playGame() function constantly monitors the tic tac toe cell elements for clicks, and inserts the appropriate 'X' or 'O'. It also kicks off the function to determine the winner
function playGame(){
    for(let i = 0; i < cells.length; i++){
        
        let cell = cells[i]; 
        cell.onclick = function(){
            cellIndex  = this.cellIndex + 1;  
            rowIndex = this.parentNode.rowIndex + 1;        
                        
            if ((toggle === 0) && (existingMove() === false)){
                this.innerHTML = "X";
                toggle = 1;
                gameBoard[rowIndex-1][cellIndex-1] = 'X';
                updateBoardStatus();
                determineWinner();                            
            }

            else if (toggle === 1 && (existingMove() === false)){
                this.innerHTML = "O";
                toggle = 0;
                gameBoard[rowIndex-1][cellIndex-1] = 'O';
                updateBoardStatus();
                determineWinner();               
            }         

        }
    }
}

//Checks to see if a player already put an 'X' or 'O' into a space (could probably update this function with 'boardStatus')
function existingMove(){
    if ((gameBoard[rowIndex-1][cellIndex-1] !== 'X') && (gameBoard[rowIndex-1][cellIndex-1] !== 'O')){
        return false;
    }
    else if ((gameBoard[rowIndex-1][cellIndex-1] !== 'X') && (gameBoard[rowIndex-1][cellIndex-1] !== 'O')){
        return false;
    }
    else{
        return true;
    }
}

//Checks if all the spaces on the board have been played
function boardFull(){
    for (let i = 0; i < cells.length; i++){
        if (cells[i].innerHTML === "")
        {
            return false;
        }
    }
    return true;
}

//The 'updateBoardStatus' function creates a copy of the 'winConditions' array (FYI: it doesn't really make a copy of the winConditions 2D array, it
//actively updates the winConditions 2D array even if I set winConditions to a constant function. I believe setting a 2D array to constant only makes
//the references constant, but it does not lock in the actual array values, so in effect, I am only setting 'boardStatus' to the reference 'winConditions')
//And pushes 'X' or 'O' to all values in the array where the index matches
function updateBoardStatus(){
    boardStatus = winConditions;

    for (let j = 0; j < cells.length; j++){
       if (cells[j].innerHTML === 'X')
       {
           for (let k = 0; k < boardStatus.length; k++){
                for (let l = 0; l < boardStatus[k].length; l++){
                    if (boardStatus[k][l] === j){
                        boardStatus[k][l] = 'X';
                    }
                }
            }
       }

       else if (cells[j].innerHTML === 'O')
       {
           for (let k = 0; k < boardStatus.length; k++){
                for (let l = 0; l < boardStatus[k].length; l++){
                    if (boardStatus[k][l] === j){
                        boardStatus[k][l] = 'O';
                    }
                }
            }
       }
    }
}

//Part of the 'every' function to check if 'X' has won.
function checkX(boardX){
    return boardX === 'X';
}

//Part of the 'every' function to check if 'O' has won.
function checkO(boardO){
    return boardO === 'O';
}

//Function checks whether X, O or tie game has occurred.
function determineWinner(){
    for (i = 0; i < boardStatus.length; i++){
        if (boardStatus[i].every(checkX) === true){
            ticTacToeContainer.style.display = "none";
            matchMessage.innerHTML = player1.name + " has won the game! Rematch?";
            matchMessage.style.display = "flex";
            rematchButton.style.display = "flex";
            rematch();
            break; //Necessary to break out of loop once the condition is met, or else it will continue and potentially give incorrect result when board is full.
        }

        else if (boardStatus[i].every(checkO) === true){
            ticTacToeContainer.style.display = "none";
            matchMessage.innerHTML = player2.name + " has won the game! Rematch?";
            matchMessage.style.display = "flex";
            rematchButton.style.display = "flex";
            rematch();
            break; //Necessary to break out of loop once the condition is met, or else it will continue and potentially give incorrect result when board is full.
        }

        else if ((boardFull() === true) && (i === (boardStatus.length-1))){
            ticTacToeContainer.style.display = "none";
            matchMessage.innerHTML = "It's a tie, everyone wins! Rematch?";
            matchMessage.style.display = "flex";
            rematchButton.style.display = "flex";
            rematch();
        }
    }
}

//This function resets the game board as a result of the user clicking 'rematch' or 'new game'
function resetBoard(){
    gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
    for (let i = 0; i < cells.length; i++){
        cells[i].innerHTML = "";
    }
    rematchButton.style.display = "none";
    newGameButton.style.display = "none";
    matchMessage.style.display = "none";
    matchMessage.innerHTML = "";
    
    //Have not found a good way to assign value of 2D array without changing original array, so had to add in this hack.
    winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
    toggle = 0;
}

//This function listens to the 'rematch' button for clicks and kicks off the appropriate functions to reset the game.
function rematch(){
    rematchButton.onclick = () => { 
        resetBoard();
        callOut();
        playGame();
    }
}

//This function listens to the 'new game' button for clicks and kicks off the appropriate functions to reset the game.
function funcNewGameButton(){
    newGameButton.onclick = () => {
        resetBoard();
        ticTacToeContainer.style.display = "none";
        newGameButton.style.display = "none";
        playerContainer.style.display = "flex";
        getPlayerNames();
    }
}

//These functions are required to be ran independent of the other functions in order for the game to work appropriately.
welcomeFunction();
playGame();
funcNewGameButton();