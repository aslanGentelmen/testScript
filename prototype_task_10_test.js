console.log(1)
function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;

}


Unit.prototype.isReadyToMove = function (distance) {
    if (distance >= this.maxDistance) {
        console.log("Impossible to move")
    } else { console.log("Ready to move") }
}

Unit.prototype.isReadytoFight = function () {
    if (this.health < (this.maxHealth) / 2) {
        console.log("Impossible to fight")
    } else { console.log("Ready to fight") }
}


Unit.prototype.restore = function (){
    
       if (this.health <= 20) {
        this.health = 100;   
        console.log("Soldier was renewed!");}
       
}

Unit.prototype.clone = function (template){
      superSoilder = Object.assign({}, template);
      return superSoilder;
}

let unisTemplate = new Unit("ground_forse", 100, 100, "5000"),
    unis1 = new Unit("ground_forse", 54, 100, "3000"),
    unis2 = new Unit("ground_forse", 54, 100, "10000");
console.log(unis1.isReadytoFight(), unis1.isReadyToMove(1000), unis1.restore(), unis1.clone(unisTemplate))
console.log(unis2.isReadytoFight(), unis1.isReadyToMove(1000), unis2.restore())
