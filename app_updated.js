//each element in board array represents value on monopoly board
let board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
//getting handle to player1
let player1_button = document.getElementById(`player-1`);
//getting handle to player2
let player2_button = document.getElementById(`player-2`);
//using object oriented paradigm
class Player {
    //constructor for initialization
    constructor(name, position, money) {
        this.name = name;
        this.position = position;
        this.money = money;
    }
    //behaviours / methods of player
    rollDice() {
        let dice_value = Math.floor(Math.random() * 6) + 1;
        this.updatePosition(dice_value);
    }
    updatePosition(dice_value) {
        this.position = + dice_value;
        this.updateMoney_1(current_position);
    }
    updatemoney(current_position) {
        if (current_position > board) {
            current_position = current_position % board.length;
        }
        this.money -= board[current_position];
    }
}
//creating objects
player1 = new Player(`Rohit`, 0, 1000);
player2 = new Player(`Punam`, 0, 1000);

//add event listener
player1_button.addEventListener(`click`, function () {
    player1.rollDice();
});
player2_button.addEventListener(`click`, function () {
    player2.rollDice();
});
console.log(player1);
console.log(player2);