//section A
//1

const numbers = [3, 6, 8, 2]

const fiveAndGreaterOnly = numbers.filter(num => num >= 5) 
console.log(fiveAndGreaterOnly)
console.log("-------")

function fiveAndGreaterOnly2(arr){
    const result = arr.filter(function(num){
        if (num >= 5){
            return true;
        };
    });
    return result;
};

console.log(fiveAndGreaterOnly2([3, 6, 8, 2]));

// //2

const numbers1 = [3, 6, 8, 2]

const evensOnly = numbers1.filter(num => num % 2 === 0)
console.log(evensOnly)

// //3 extra credit

const people = [
    { name: "Angelina Jolie", age: 80},    
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kanye West", age: 16},
    { name: "Bob Ziroll", age: 100}
]

const ofAge = people.filter(num => num.age > 16)

console.log(ofAge)



// //Section B

// //1

const doubleNumbers = [2, 5, 100]

const result1b = doubleNumbers.map(num => num * 2)   
console.log(result1b)

function doubleNumbers2(arr){
    const result = arr.map(function(num){
        return num * 2;
    });
    return result
}
console.log(doubleNumbers2([2, 5, 100]))



// //2

const stringItUp = [2, 5, 100]

const newStringItUp = stringItUp.map(num => num + "")
console.log (newStringItUp)

// //3

const capitilizeNames = [ "john,", "JACOB", "jinGleHeimer", "schmidt"]

const newCapitilizedNames = capitilizeNames.map(capitilizeNames => capitilizeNames.charAt(0).toUpperCase() + capitilizeNames.substr(1).toLowerCase());
    
console.log(newCapitilizedNames);


//extra credit 1

const namesOnly = [
    {

         name: "Angelina Jolie",
         age: 20
    },
    {
         name: "Eric Jones",
         age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]   

const result = namesOnly.map(function(name){
    return name.name
})  
console.log(result)

// Section C .reduce()



// //1


const sumNums = [1, 2, 3]

const total = sumNums.reduce(function(final, sumNum){
    final += sumNum
    return final
})
console.log(total)

function total(arr) {
    const result = arr.reduce(function(finalAddition, num){
        finalAddition = finalAddition += num;
        return finalAddition;
    });
}
return result;

// //2

const stringConcatNum =[1, 2, 3]          

const stringConcat = stringConcatNum.reduce(function(final, num){
    final.push(num.stringConcatNum + "")
    return final
}, [])
console.log(stringConcat)

// //3

const voters = [                                   
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: true},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const totalVotes = voters.reduce(function(final, vote){
    final.push(vote.voted === true)
    return final
})
console.log(totalVotes)


// //Section d

// //1

const numbers = [2, 20, 5, 90, 1, 3]

numbers.sort((a, b) => a - b)
console.log(numbers)

// //2

const numbers2 = [2, 20, 5, 90, 1, 3]

numbers2.sort((a, b) => b - a)
console.log(numbers2)

// //3

const lengthShort = ["dog", "wolf", "by", "family", "eaten"]
lengthShort.sort((a, b) => a.length - b.length)
console.log(lengthShort)

const alphabetical = ["dog", "wolf", "by", "family", "eaten"]







