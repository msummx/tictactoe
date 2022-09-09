let player = document.getElementById("boardmessage");
let xscore = document.getElementById("playerXscore");
let oscore = document.getElementById("playerOscore");

let cpu = false
let playerXwins = 0
let playerOwins = 0
let playerX = true
let playing = false
let turn = 1
let board = {"1":"-","2":"-","3":"-",
            "4":"-","5":"-","6":"-",
            "7":"-","8":"-","9":"-",}

const newGame = () => {
    playing = true
    playerX = true
    cpu = false
    turn = 1
    board = {"1":"-","2":"-","3":"-",
            "4":"-","5":"-","6":"-",
            "7":"-","8":"-","9":"-",}
    box1.innerText =""
    box2.innerText =""
    box3.innerText =""
    box4.innerText =""
    box5.innerText =""
    box6.innerText =""
    box7.innerText =""
    box8.innerText =""
    box9.innerText =""

    xscore.innerText= `PLAYER ❌ WINS: ${playerXwins}`
    oscore.innerText= `PLAYER ⭕ WINS: ${playerOwins}`

}

function newGameCPU(){
    newGame()
    cpu = true
}

function computerTurn(){
    i=0
    while (true && i <30){
        i++
        aiNumber = Math.floor(Math.random() * 10);
        if(board[aiNumber] == '-'){
            boxClick(aiNumber)
            break
        }
    }
}
function play(box,boardNumber){
      
    if(playerX == true){
        box.innerText="❌";//this puts an X on the html board
        board[boardNumber]="X" //this puts an X in the board dictionary
        player.innerText = "PLAYER TURN ⭕";//this sets html to display whos turn it is
    }
    else{
        player.innerText = "PLAYER TURN ❌";//this puts an O on the html board
        box.innerText="⭕";//this sets html to display whos turn it is
        board[boardNumber]="O"//this puts an O in the board dictionary
    }
    checkWin()
   
    if(playerX){
        playerX = false
        if(cpu){
            computerTurn();
        }
    }
    else{
        playerX = true
    }
    turn++
}

const boxClick = (number) => {
    if (playing){
        if (board[`${number}`]=='-'){
            play(document.getElementById(`box${number}`), number)
        }
    }
}

const xwin = () => {
    player.innerText = "PLAYER ❌ wins!"
    playerXwins += 1 
    playing = false
}

const owin = () => {
    player.innerText = "PLAYER ⭕ wins!"
    playerOwins += 1
    playing = false
}

const checkWin = () => {
    if ((board['1'] == board['2'] && board['2'] == board['3']) && board['1'] != '-'){
        if (board['1'] == 'X'){
            xwin()
        }
        else {
            owin()
        }
    }
    else if ((board['4'] == board['5'] && board['5'] == board['6']) && board['4'] != '-'){
        if (board['4'] == 'X'){
            xwin()
        }
        else {
            owin()
        }
    }
    else if ((board['7'] == board['8'] && board['8'] == board['9']) && board['7'] != '-'){
        if (board['7'] == 'X'){
            xwin()
        }
        else {
            owin()
        }
    }
    else if ((board['1'] == board['4'] && board['4'] == board['7']) && board['1'] != '-'){
        if (board['1'] == 'X'){
            xwin()
        }
        else {
            owin()
        }
    }
    else if ((board['2'] == board['5'] && board['5'] == board['8']) && board['2'] != '-'){
        if (board['2'] == 'X'){
            xwin()
        }
        else {
            owin()
        }
    }
    else if ((board['3'] == board['6'] && board['6'] == board['9']) && board['3'] != '-'){
        if (board['3'] == 'X'){
            xwin()
        }
        else {
            owin()
        }
    }
    else if ((board['1'] == board['5'] && board['5'] == board['9']) && board['1'] != '-'){
        if (board['1'] == 'X'){
            xwin()
        }
        else {
            owin()
        }
    }
    else if ((board['3'] == board['5'] && board['5'] == board['7']) && board['3'] != '-'){
        if (board['3'] == 'X'){
            xwin()
        }
        else {
            owin()
        }
    }
    else if (turn >= 9){
        player.innerText = 'Tie Game!'
        playing = false
    }
}