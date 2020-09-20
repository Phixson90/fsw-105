var capitalizedAndLowercase = "Hello"
var uppercaseHello = capitalizedAndLowercase.toUpperCase()
var lowerCaseHello = capitalizedAndLowercase.toLowerCase()
console.log(uppercaseHello, lowerCaseHello)

var findMiddleIndex = "Hello"
var indexOfHello = Math.floor(findMiddleIndex.length / 2)
console.log(indexOfHello)

var findMiddleIndexOfHelloWorld = "Hello World"
var indexOfHelloWorld = Math.floor(findMiddleIndexOfHelloWorld.length / 2)
console.log(indexOfHelloWorld)

var firstHalfHello = "Hello"
var firstHello = firstHalfHello.slice(0, 2)
console.log(firstHello)

var firstHalfHelloWorld = "Hello World"
var firstHelloWorld = firstHalfHelloWorld.slice(0, 5)
console.log(firstHelloWorld)


var capitalizedAndLowercaseHello = "Hello"
var helloArray = capitalizedAndLowercaseHello.split("")
console.log(helloArray)

var hello = "Hello"
var firstPartHello = hello.slice(0, 2)
var lastPartHello = hello.slice(2,5)
var upperCaseHe = firstPartHello.toUpperCase()
var lowerCaseLlo = lastPartHello.toLowerCase()
var newHello = upperCaseHe.concat(lowerCaseLlo)
console.log(newHello)

var helloWorld = "Hello World"
var firstPartHelloWorld = helloWorld.slice(0, 5)
var lastPartHelloWorld = helloWorld.slice(5)
var upperCaseHello = firstPartHelloWorld.toUpperCase()
var lowerCaseWorld = lastPartHelloWorld.toLowerCase()
var newHelloWorld = upperCaseHello.concat(lowerCaseWorld)
console.log(newHelloWorld)

var fruit = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]

var removeLastVeggie = vegetables.pop()
var removeFirstFruit = fruit.shift()
var orangeIndex = fruit.indexOf("orange")
var fruitPlusOrangeIndex = fruit.push(orangeIndex)
var lengthOfVegetables = vegetables.length
var vegetablesPlusStringLength = vegetables.push(lengthOfVegetables)
var food = fruit.concat(vegetables)
var foodSpliced = food.splice(4, 2)
var reversedFood = food.reverse()
var joinedReversedFood = reversedFood.join(",")
console.log(joinedReversedFood)







