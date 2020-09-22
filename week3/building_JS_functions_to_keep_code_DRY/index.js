function sum(num1, num2){
    return num1 + num2
}
var result = sum(87, 46)
console.log(result)


function largestNum(){
    return Math.max(num4, num5, num6)
}
var result = Math.max(46, 86, -346)
console.log(result)

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(var i =0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
}

var string = "hello"

function strinAsAParameter(){
    for(var i = 0; i <= 20; i++ )
    console.log("hello" + "hello")
}
