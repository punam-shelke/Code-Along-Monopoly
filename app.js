//each element in board array represents value on monopoly board
let board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
//getting handle to player1
let player1_button = document.getElementById(`player-1`);
//getting handle to player2
let player2_button = document.getElementById(`player-2`);
console.log(player1_button);
console.log(player2_button);
//adding event listener to the player-1 button
player1_button.addEventListener(`click`, rollDice_1);
//adding event listener for player-2 button
player2_button.addEventListener(`click`, rollDice_2);
//defining array to store data of player
//name ,initial position ,initial money
let player1 = [`Punam`, 0, 1000];
let player2 = [`Rohit`, 0, 1000];
//defining rollDice function for player1
function rollDice_1() {
    //generating a random number between 1 to 6
    let dice_value = Math.floor(Math.random() * 6) + 1;
    changePosition_1(player1[1], dice_value);//function yet to define which will pdate player1 position
}
//defining rollDice function for player2
function rollDice_2() {
    //generating random number between 1 and 6
    let dice_value = Math.floor(Math.random() * 6) + 1;
    changePosition_2(player2[1], dice_value);
}
//defining changePosition function for player1
function changePosition_1(old_position, dice_value) {
    //finding the new value of position
    let new_position = old_position + dice_value;
    //updating player1 position
    player1[1] = new_position;
    //after changing the position we have to update the money
    updateMoney_1(player1[1]);//not yet defined
}
//defining changePosition function for player2
function changePosition_2(old_position, dice_value) {
    //calculating new position of player2
    let new_position = old_position + dice_value;
    //updating new position of player 2
    player2[1] = new_position;
    //after changing the position we have to update player's money
    updateMoney_2(player2[1]);
}
//defining the updateMoney function for player1
function updateMoney_1(current_position) {
    let updateMoney = 0;//always initialize variable
    //if currentposition is out of bound of board array, we can get NaN
    //setting it back to 16 x 16 square grid
    if (current_position > board.length) {
        current_position = current_position % board.length + 1;
    }
    //updatemoney holds the calculated value of money player should hold.
    updateMoney = player1[2] - board[current_position - 1];
    player1[2] = updateMoney;
    console.log(player1);
}

//defining updateMoney function for player2
function updateMoney_2(current_position) {
    let updateMoney = 0; //always initialize variable
    //we want to use currentposition as index to board array.
    //make sure it is not out of bound
    if (current_position > board.length) {
        current_position = current_position % board.length + 1;
    }
    //calculate money to be updated 
    updateMoney = player2[2] - board[current_position];
    //update the money
    player2[2] = updateMoney;
    console.log(player2);
}