class Arena {
    constructor(name){
        this.name = name
        this.gladiators = []
    }

    addGladiator(gladiator){
        this.gladiators.push(gladiator)
        console.log(this.gladiators[this.gladiators.length - 1].sayBattleCry())
    }
}

class Gladiator {
    constructor(name, weapon, battleCry){
        this.name = name
        this.weapon = weapon
        this.battleCry = battleCry
        this.hp = 100
    }
    sayBattleCry(){
        console.log(this.battleCry)
    }
}

const colloseum = new Arena("Colloseum")
const spartacus = new Gladiator('Spartacus', 'Sword', "I AM SPARATCUS")
const crixus = new Gladiator("Crixus", "Sword & Shield", "I WILL DEFEAT YOU")

colloseum.addGladiator(spartacus)
colloseum.addGladiator(crixus)
// console.log(colloseum)