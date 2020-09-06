if(5 > 3) {
    console.log("Is greater than")
}



function catLength(a)   {
    let result;
    if (a === 3) {
        result = "is the length";
    }
        else {
            result = "is not the length";
        }
        return result;
}
console.log(catLength(3));


if("cat" === "dog") {
    console.log("The Same")
}   else {
        console.log("not the same")
}


function age(a) {
    let result;
    if (a > 18) {
        result = "is allowed to go into movie.";
}   
    else {
        result = "is not allowed to go into movie."
}
    return result;
}
console.log(age(12));

function name(a) {
    let result;
    if (a === "name starts with b") {
        result = "is allowed into movie";
    }
    else {
        result = "is not allowed into movie"
    }
    return result;
}
console.log(name("name starts with b"))



function nameAge(a, b) {
    let result;
    if (a > 18 && "name starts with b" === b) {
        result = "is allowed into movie"
    }
        else {
            result = "is not allowed into movie"
        }
        return result;
}
console.log(nameAge(12, "name starts with b"))


if ("1" === 1) {
    console.log("strictly")
}
else if ("1" == 1) {
    console.log("loose")
}
else if ("1" !== 1) {
    console.log("not equal at all")
}


if (1 <= 2 && 2 === 4) {
    console.log("yes")
}
else {
    console.log("no")
}


if ("dog" === "") {
    console.log("dog is equal to string")
}
else {
    console.log("dog is not equal to string")
}


if (true) {
    console.log("is a boolean")
}
else {
    console.log("is not a boolean")
}

