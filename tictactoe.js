let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
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

    xscore.innerText= `Player X Wins: ${playerXwins}`
    oscore.innerText= `Player O Wins: ${playerOwins}`

}

function newGameCPU(){
    newGame()
    cpu = true
}


// new stuff below!!!!!!!!!!!!!!!!!!!!
let aiTurn = false
function computerTurn(){
    i=0
    while (true && i <30){
        
        i++
        //checkingForEmpty()
        aiNumber = Math.floor(Math.random() * 10);
        if(board[aiNumber] == '-'){
            if(aiNumber == '1'){boxClick1()}
            if(aiNumber == '2'){boxClick2()}
            if(aiNumber == '3'){boxClick3()}
            if(aiNumber == '4'){boxClick4()}
            if(aiNumber == '5'){boxClick5()}
            if(aiNumber == '6'){boxClick6()}
            if(aiNumber == '7'){boxClick7()}
            if(aiNumber == '8'){boxClick8()}
            if(aiNumber == '9'){boxClick9()}
            i=0
            break
        }
    }
}
function playComputer(boxNumber,boardNumber){
    if(playerX == true){
        boxNumber.innerText="❌";//this puts an X on the html board
        board[boardNumber]="X" //this puts an X in the board dictionary
        player.innerText = "PLAYER TURN ⭕";//this sets html to display whos turn it is
    }
    else{
        player.innerText = "PLAYER TURN ❌";//this puts an O on the html board
        boxNumber.innerText="⭕";//this sets html to display whos turn it is
        board[boardNumber]="O"//this puts an O in the board dictionary
    }
    checkWin()
    if(playerX == true){
        playerX = false
        aiTurn = true
        computerTurn()
    }
    else{
        playerX = true
        aiTurn = false
    }
    turn++
    console.log(board)
}
const checkWin = () => {
    if ((board['1'] == board['2'] && board['2'] == board['3']) && board['1'] != '-'){
        if (board['1'] == 'X'){
            console.log('Player X wins!')
            player.innerText = "PLAYER ❌ wins!"
            playerXwins += 1
            playing = false
        }
        else {
            console.log('Player O wins!')
            player.innerText = "PLAYER ⭕ wins!"
            playerOwins += 1
            playing = false
        }
    }
    else if ((board['4'] == board['5'] && board['5'] == board['6']) && board['4'] != '-'){
        if (board['4'] == 'X'){
            console.log('Player X wins!')
            player.innerText = "PLAYER ❌ wins!"
            playerXwins += 1 
            playing = false
        }
        else {
            console.log('Player O wins!')
            player.innerText = "PLAYER ⭕ wins!"
            playerOwins += 1
            playing = false
        }
    }
    else if ((board['7'] == board['8'] && board['8'] == board['9']) && board['7'] != '-'){
        if (board['7'] == 'X'){
            console.log('Player X wins!')
            player.innerText = "PLAYER ❌ wins!"
            playerXwins += 1
            playing = false
        }
        else {
            console.log('Player O wins!')
            player.innerText = "PLAYER ⭕ wins!"
            playerOwins += 1
            playing = false
        }
    }
    else if ((board['1'] == board['4'] && board['4'] == board['7']) && board['1'] != '-'){
        if (board['1'] == 'X'){
            console.log('Player X wins!')
            player.innerText = "PLAYER ❌ wins!"
            playerXwins += 1
            playing = false
        }
        else {
            console.log('Player O wins!')
            player.innerText = "PLAYER ⭕ wins!"
            playerOwins += 1
            playing = false
        }
    }
    else if ((board['2'] == board['5'] && board['5'] == board['8']) && board['2'] != '-'){
        if (board['2'] == 'X'){
            console.log('Player X wins!')
            player.innerText = "PLAYER ❌ wins!"
            playerXwins += 1
            playing = false
        }
        else {
            console.log('Player O wins!')
            player.innerText = "PLAYER ⭕ wins!"
            playerOwins += 1
            playing = false
        }
    }
    else if ((board['3'] == board['6'] && board['6'] == board['9']) && board['3'] != '-'){
        if (board['3'] == 'X'){
            console.log('Player X wins!')
            player.innerText = "PLAYER ❌ wins!"
            playerXwins += 1 
            playing = false
        }
        else {
            console.log('Player O wins!')
            player.innerText = "PLAYER ⭕ wins!"
            playerOwins += 1
            playing = false
        }
    }
    else if ((board['1'] == board['5'] && board['5'] == board['9']) && board['1'] != '-'){
        if (board['1'] == 'X'){
            console.log('Player X wins!')
            player.innerText = "PLAYER ❌ wins!"
            playerXwins += 1
            playing = false
        }
        else {
            console.log('Player O wins!')
            player.innerText = "PLAYER ⭕ wins!"
            playerOwins += 1
            playing = false
        }
    }
    else if ((board['3'] == board['5'] && board['5'] == board['7']) && board['3'] != '-'){
        if (board['3'] == 'X'){
            console.log('Player X wins!')
            player.innerText = "PLAYER ❌ wins!"
            playerXwins += 1
            
            playing = false
        }
        else {
            console.log('Player O wins!')
            player.innerText = "PLAYER ⭕ wins!"
            playerOwins += 1
            playing = false
        }
    }
    else if (turn >= 9){
        console.log('Tie game!')
        player.innerText = 'Tie Game!'
        playing = false
    }
}
function play(boxNumber,boardNumber){
      
    if(playerX == true){
        boxNumber.innerText="❌";//this puts an X on the html board
        board[boardNumber]="X" //this puts an X in the board dictionary
        player.innerText = "PLAYER TURN ⭕";//this sets html to display whos turn it is
    }
    else{
        player.innerText = "PLAYER TURN ❌";//this puts an O on the html board
        boxNumber.innerText="⭕";//this sets html to display whos turn it is
        board[boardNumber]="O"//this puts an O in the board dictionary
    }
    checkWin()
    if (cpu == false){
        if(playerX == true){
            playerX = false
        }
        else{
            playerX = true
        }}
    console.log(board)
    turn++
}
const boxClick1 = () => {
    if (playing){
        if(board["1"]=="-"){
            if(cpu){
                playComputer(box1,1)}
            else{
                play(box1,1)}}}}
                
const boxClick2 = () => {
    if (playing){
    if(board["2"]=="-"){
        if(cpu){
            playComputer(box2,2)
        }
        else{
            play(box2,2)
        }
    }}
}
const boxClick3 = () => {
    if (playing){
    if(board["3"]=="-"){
        if(cpu){
            playComputer(box3,3)
        }
        else{
            play(box3,3)
        }
    }}
}
const boxClick4 = () => {
    if (playing){
    if(board["4"]=="-"){
        if(cpu){
            playComputer(box4,4)
        }
        else{
            play(box4,4)
        }
    }}
}
const boxClick5 = () => {
    if (playing){
    if(board["5"]=="-"){
        if(cpu){
            playComputer(box5,5)
        }
        else{
            play(box5,5)
        }
    }}
}
const boxClick6 = () => {
    if (playing){
    if(board["6"]=="-"){
        if(cpu){
            playComputer(box6,6)
        }
        else{
            play(box6,6)
        }
    }}
}
const boxClick7 = () => {
    if (playing){
    if(board["7"]=="-"){
        if(cpu){
            playComputer(box7,7)
        }
        else{
            play(box7,7)
        }
    }}
}
const boxClick8 = () => {
    if (playing){
    if(board["8"]=="-"){
        if(cpu){
            playComputer(box8,8)}
        else{
            play(box8,8)}}}}

const boxClick9 = () => {
    if (playing){
        if(board["9"]=="-"){
            if(cpu){
                playComputer(box9,9)}
            else{
                play(box9,9)}}}}