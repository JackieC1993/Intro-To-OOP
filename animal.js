// A Class is an object factory that will make "instances" of that class.
// Basically it is a blueprint for how each instance of this class will look -- as in what properties and methods it has right out of the box

// class Animal {
//     constructor(){
//         // "this" refers to each instance of the class, on which we are calling "this" on
//         this.age = 0;
//         this.color = 'red';
//         this.isFriendly = true
//     }
//     walk(){
//         console.log('I am walking!')
//     }
//     sayAge(){
//         console.log(`I am ${this.age} years old`)
//     }
// }

// 'new' keyword: allows us to make a new instance of a class
// const fox = new Animal()
// console.log(fox)
// console.log(fox.sayAge())


// Class with constructor that takes in parameters
class Animal {
    constructor(name, color, species, age = 0){
        // "this" refers to each instance of the class, on which we are calling "this" on
        this.age = age
        this.isFriendly = true;
        this.name = name;
        this.color = color;
        this.species = species;
    }
    walk(){
        console.log('I am walking!')
    }
    // Method that prints the age of an instance of the class
    sayAge(){
        console.log(`I am ${this.age} years old`)
    }
    // Method that updates the age property for an instance of the class
    hasBirthday(){
        if(this.species === "dog"){
            this.age += 5
        } else {
            this.age += 1
        }
    }
}

const dinosaur = new Animal("Rex", "green", "dinosaur")
// console.log(dinosaur)

const cat1 = new Animal("Smudge", "black and white", "cat")
cat1.hasBirthday()
console.log(cat1)

const dog = new Animal("Spot", "golden", "dog", 5)
dog.hasBirthday()
console.log(dog)


// What happens if we omit one of the parameters when we make a new instance of the Animal class?
const bat = new Animal("Zubat", "blue and purple")
// console.log(bat) // bat.species => undefined