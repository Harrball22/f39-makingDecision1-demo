
let jonSnowAttack = 25
let jamieLannisterAttack = 35

let fightOver = false

if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon has better attack than Jamie")
} else if (jonSnowAttack < jamieLannisterAttack){
    console.log("Jamie has better attack than Jon")
} else {
    console.log("Jon and Jamie have the same attack")
}

let jonSnowHealth = 100
let jonSnowDefence = 0

console.log("----------")

function Fight(){
    if (jonSnowHealth - jamieLannisterAttack <= 0){ // Not the best way to do it. Jon's health will not drop to 0
        console.log("Jon has been slain")
        fightOver = true
        return
    } else {
        jonSnowHealth -= jamieLannisterAttack
        console.log("Jon's health is down to " + jonSnowHealth)
    }
    
    console.log("----------")

    let coinLandsHead = false
    if (Math.random() >= 0.5)
        coinLandsHead = true

    if (coinLandsHead === true){
        console.log("The fight continues")
    } else {
        console.log("Jon is allowed to run away")
        fightOver = true
        return
    }

    console.log("----------")
}

for(let i = 0; i < 5; i++){
    Fight();
    if (fightOver)
        break;
}