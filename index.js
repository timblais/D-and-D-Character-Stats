const express = require('express')
const app = express()

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})


class Character {
    constructor(str,cons,int,wisd,char,dex){
        this.strength = str
        this.constitution = cons
        this.intelligence = int
        this.wisdom = wisd
        this.charisma = char
        this.dexterity = dex
    }
}

function generateStatValues() {
    let array = []
    for(let i = 0; i < 6; i++){
        let rolls = []
        for (let x = 0; x < 4; x++){
            rolls.push(Math.ceil(Math.random()*6))
        }
        rolls.sort((a,b) => b - a)
        rolls.pop()
        array.push(rolls.reduce((a,c) => a + c))
    }
    return array
}

app.get('/random', (request, response) => {
    let stats = generateStatValues()
    let char1 = new Character(stats[0],stats[1],stats[2],stats[3],stats[4],stats[5])
    response.json(char1)
})