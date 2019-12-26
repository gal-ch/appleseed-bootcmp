class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;

    }
    play(player){
        var num = Math.floor(Math.random() * 10) + 1; 
        if (num % 2 == 0)
        {
        this.score = 0+1;
        }
    }
}
let playerone = new Player("gal");
console.log(playerone);
