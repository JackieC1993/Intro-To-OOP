// const Jackie = {
// hobby : "Gamer, Yelp Reviewer",
// age: 30,
// occupation: "Social Media Manager",
// food: "Korean BBQ , Cantonese Cusine",
// location: "Elmhurst, Queens"
// }

const spaceship = {
    brand: "Space X",
    engine: 'electric',
    milesTraveled: 0,
    distanceFromEarth: 0,
    flyTo: function(planet, distanceInMiles){
        console.log(this)
    }
}
// console.log(spaceship.flyTo("Mars", 24000))


class Spaceship {
    constructor(brand, engine){
        this.brand = brand
        this.engine = engine
        this.milesTraveled = 0
        this.distanceFromEarth = 0
        this.location = "Earth"
    }
    flyTo(planet, distanceInMiles){
        this.distanceFromEarth += distanceInMiles
        this.location = planet
        this.milesTraveled += distanceInMiles
    }
    flyBack(){
        this.location = "Earth"
        this.milesTraveled += this.distanceFromEarth
        this.distanceFromEarth = 0
    }
}

const spaceX = new Spaceship("Space X", "fast engine")
spaceX.flyTo("Mars", 240000)
spaceX.flyBack()

console.log(spaceX)


const spaceShip2 = new Spaceship("Nike", "slow engine")
