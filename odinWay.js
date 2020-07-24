var turn = true;
const Gameboard = (() => {
    const gameboard = ['','','','','','','','','']
    return{
        gameboard
    }
})()
const newGB = Gameboard.gameboard
var l = newGB.length

const displayController = (() => {
    const x = document.getElementsByClassName('mark')
    const render = () => {
        for(let i=0;i<l;i++){
            x[i].textContent = newGB[i]
        }
    }
    return{
        x,
        render
    }
})()
displayController.render()

//twoplayers
const Player = (sign) => {
    const name = prompt('Enter player name : ')
    const playersign = sign
    const addMarks = (e,i) => {
                if(e.target.textContent === ''){
                    newGB[i] = playersign
                    displayController.render()
                    turn  = !turn
                }else{
                    alert('not valid')
                }
    }
    const checkwonornot = () => {
        if((newGB[0]===playersign && newGB[1]===playersign &&newGB[2]===playersign) || 
        (newGB[0]===playersign &&newGB[3]===playersign &&newGB[6]===playersign ) ||
        (newGB[0]===playersign &&newGB[4]===playersign  &&newGB[8]===playersign  ) ||
        (newGB[2]===playersign  &&newGB[5]===playersign  &&newGB[8]===playersign  ) ||
        (newGB[6]===playersign  &&newGB[7]===playersign  &&newGB[8]===playersign  ) ||
        (newGB[3]===playersign  &&newGB[4]===playersign  &&newGB[5]===playersign  ) ||
        (newGB[2]===playersign  &&newGB[4]===playersign  &&newGB[6]===playersign  ) ||
        (newGB[1]===playersign  &&newGB[4]===playersign  &&newGB[7]===playersign  )
        ){
        alert(`${name} Won`)
    }
    }
    return{
        name,
        addMarks,
        checkwonornot
    }
}

//vsComputer
document.getElementById('title').textContent = 'Click any empty box to make computer play'

const Player = (sign,naam) => {
    const name = naam ? naam : prompt('Enter player name : ')
    const playersign = sign
    const addMarks = (e,i) => {
                if(e.target.textContent === ''){
                    if(turn === true){
                        newGB[i] = playersign
                        displayController.render()
                    }
                    else{
                        function newRandom(){
                            const randomnumber=Math.floor((Math.random() * 8) + 1)
                            return randomnumber
                        }
                        var randomnumber = newRandom()
                        while(newGB[randomnumber] !== ''){
                            randomnumber = newRandom()
                        }
                        newGB[randomnumber] = playersign
                        displayController.render()
                    }
                    turn = !turn
                }else{
                    alert('not valid')
                }
    }
    const checkwonornot = () => {
        if((newGB[0]===playersign && newGB[1]===playersign &&newGB[2]===playersign) || 
        (newGB[0]===playersign &&newGB[3]===playersign &&newGB[6]===playersign ) ||
        (newGB[0]===playersign &&newGB[4]===playersign  &&newGB[8]===playersign  ) ||
        (newGB[2]===playersign  &&newGB[5]===playersign  &&newGB[8]===playersign  ) ||
        (newGB[6]===playersign  &&newGB[7]===playersign  &&newGB[8]===playersign  ) ||
        (newGB[3]===playersign  &&newGB[4]===playersign  &&newGB[5]===playersign  ) ||
        (newGB[2]===playersign  &&newGB[4]===playersign  &&newGB[6]===playersign  ) ||
        (newGB[1]===playersign  &&newGB[4]===playersign  &&newGB[7]===playersign  )
        ){
        alert(`${name} Won`)
    }
    }
    return{
        name,
        addMarks,
        checkwonornot
    }
}

var player1 = Player('X')
var player2 = Player('O') // for computer pass name 'Computer'
document.getElementById('first').textContent = player1.name
document.getElementById('second').textContent = player2.name
for(let i=0;i<l;i++){
displayController.x[i].addEventListener('click',function(e){
if(turn){
    player1.addMarks(e,i)
    player1.checkwonornot()
}else{
    player2.addMarks(e,i)
    player2.checkwonornot()
}
})
}
