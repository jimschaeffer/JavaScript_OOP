console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// a class is a blueprint for an object
class Person {
    constructor(name, petCount, residence, hobbies){
        this.name = name;
        this.pets = petCount;
        this.residence = residence;
        this.hobbies = hobbies;
        // LEFT: properties that we are making that will exist on the object
        // RIGHT: quick, temporary variables used as parameters
        // inside the body of the constructor, then they're gone.
    }

    addhobby(newHobby){
        this.hobbies.push(newHobby);
        // a method (.push) that exists on an array (.hobbies)
    }

    removeHobby(remHobby){
        //filter (higher-order array method.
        // It wants a function to be provided as a parameter.
        this.hobbies = this.hobbies.filter((element) => {
            //return a boolean
            //true means keep
            //false means discard
        return element != remHobby
        });
    }

    greeting(){
        console.log("Hello fellow person!")
    }

}

const personTest = new Person()

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    //overriding
    greeting(){
        console.log("Hello fellow coder!");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// see above

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor(){
        this.result = 0;
    // could just do "result = 0;" and no constructor.
    }
    add(a, b = this.result){
        this.result = a + b;
        return this.result;
    }
    subtract(a, b = this.result){
        this.result = a - b;
        return this.result;
    }
    multiply(a, b = this.result){
        this.result = a * b;
        return this.result;
    }
    divide(a, b){
        this.result = a / b;
        return this.result;
    }
    displayResult(){
        console.log(this.result(result));
    }

    displayResult(){
        console.log(this.result);
    }
}

const calcTest = new Calculator();
// creating an instance of the class
// we are making an object based on the blueprint
// we are invoking the "constructor" function
console.log(calcTest.result);
// referencing the methods and properties on the object.
calcTest.divide(4, 6);
console.log(calcTest.result);