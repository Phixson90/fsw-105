// // // // //1

const name = "John"
const age = 101

function runForLoops(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = {type: pets[i]}
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("Pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoops(["cat", "dog", "John"])


// // //2  

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {

    })
}


mapVegetables = arr => {
    return arr.map(carrot => {
        return{type: "carrot", name: carrot}

    });
}

console.log(mapVegetables([carrots]));

// //3

const people = [
    {

    name: "Princess Peach",
    friendly: false 
    },

    {

    name:"Luigi",
    friendly: true
    },

    {

    name: "Mario",
    friendly: true
    },
    {
    name: "Bowser",
    friendly: false 
    },
]

const filterForFriendly = people.filter(people => people.friendly === true)

console.log(filterForFriendly)

// //4

const doMathSum = (a, b) => console.log(a + b)

const produceProduct = (a, b) => console.log(a + b)


//5 

const personPrintString = [
    {
    firstName: "Jane",
    lastName: "Doe",
    age: 100
    }
]

printString = (firstName, lastName, age) => console.log("Hi" + firstName + lastName + "how does it feel to be" + age)

//6 template literals

const personTemplateLiteral = [
    {
    firstName: "Jane",
    lastName: "Doe",
    age: 100
    }
]
const printStringTemplateLiterals = (firstName, lastName, age) => console.log(`Hi ${firstName} ${lastName} how does it feel to be ${age}`)




//7 This one does not show what I am suppose to do in the homework instructions. 




//8 Template Literals

const traveler = [
    {
        location: "Hawaii",
        name: "Janice"
    }
]

const travelerTemplateLiterals = (location, name) => console.log(`Hi ${name}! Welcome to ${location}. I 
hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)