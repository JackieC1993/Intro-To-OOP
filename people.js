class Person {
    constructor(name){
        this.name = name
    }

    greet(person){
        console.log(`Hello ${person.name}, my name is ${this.name}`)
    }

}

const toby = new Person("Toby")
const gwen = new Person("Gwen")

console.log(toby)
console.log(gwen)

toby.greet(gwen)
gwen.greet(toby)