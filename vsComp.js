var gameBoard = ['','','','','','','','',''];

document.getElementById('title').textContent = 'Click any empty box to make computer play'

//make this factory
const players = (name) => {
    const playername = name
    return{playername}
}
createPlayer()

function createPlayer(){
    const playerone = prompt("Enter the player one name : ")
    var first = players(playerone)

document.getElementById('first').textContent = first.playername
document.getElementById('second').textContent = 'Computer'
}

var turn = true//controll the flow

const x = document.querySelectorAll('.mark')

function render(){
for(let i=0;i<x.length;i++){
    x[i].textContent = gameBoard[i];
}
}
render()

//function addMarks(){
    for(let i=0;i<x.length;i++){
        x[i].addEventListener('click',function(e){
            if(e.target.textContent === '')
            {
                if(turn===true){
                    gameBoard[i] = 'X'
                    render()
                }
                else{
                    function createRandom() {
                        var randomnumber=Math.floor((Math.random() * 8) + 1)
                        return randomnumber
                    }
                    var number = createRandom()

                    while(gameBoard[number] !== ''){
                        number = createRandom()
                    }
                    
                    // console.log(gameBoard[randomnumber] === '')
                    // if(gameBoard[randomnumber] !== ''){
                    // var timer = window.setInterval(function(){
                    //     randomnumber = (randomnumber+5)%9
                    //   }, 3000);
                    // }else{
                    //     clearTimeout(timer);
                    //     gameBoard[randomnumber] ='Y'
                    // }
                    gameBoard[number] = 'Y'
                    render()
                } 
            const change = turn
            turn = !change
            check()
            }
            else{
                alert('not valid')
            }
            
        })
    }
//}

function check(){
    if((gameBoard[0]==='X'&&gameBoard[1]==='X'&&gameBoard[2]==='X') || 
        (gameBoard[0]==='X'&&gameBoard[3]==='X'&&gameBoard[6]==='X') ||
        (gameBoard[0]==='X'&&gameBoard[4]==='X'&&gameBoard[8]==='X') ||
        (gameBoard[2]==='X'&&gameBoard[5]==='X'&&gameBoard[8]==='X') ||
        (gameBoard[6]==='X'&&gameBoard[7]==='X'&&gameBoard[8]==='X') ||
        (gameBoard[3]==='X'&&gameBoard[4]==='X'&&gameBoard[5]==='X') ||
        (gameBoard[2]==='X'&&gameBoard[4]==='X'&&gameBoard[6]==='X') ||
        (gameBoard[1]==='X'&&gameBoard[4]==='X'&&gameBoard[7]==='X')
        ){
        alert(`${document.getElementById('first').textContent} Won`)
    }
    else if((gameBoard[0]==='Y'&&gameBoard[1]==='Y'&&gameBoard[2]==='Y') || 
        (gameBoard[0]==='Y'&&gameBoard[3]==='Y'&&gameBoard[6]==='Y') ||
        (gameBoard[0]==='Y'&&gameBoard[4]==='Y'&&gameBoard[8]==='Y') ||
        (gameBoard[2]==='Y'&&gameBoard[5]==='Y'&&gameBoard[8]==='Y') ||
        (gameBoard[6]==='Y'&&gameBoard[7]==='Y'&&gameBoard[8]==='Y') ||
        (gameBoard[3]==='Y'&&gameBoard[4]==='Y'&&gameBoard[5]==='Y') ||
        (gameBoard[2]==='Y'&&gameBoard[4]==='Y'&&gameBoard[6]==='Y') ||
        (gameBoard[1]==='Y'&&gameBoard[4]==='Y'&&gameBoard[7]==='Y')
        ){
    alert(`${document.getElementById('second').textContent} Won`)
    }
}

function restart(){
    gameBoard = ['','','','','','','','',''];
    render()
}