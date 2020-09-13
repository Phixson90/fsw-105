var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

function isOldEnough(){
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("old enough");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log("not old enough");
        }
    }
}

function isOldEnough(){
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough to see Mad Max");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max");
        }
    }
}


function isOldEnough(){
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough" + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + "can see Mad Max");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough, don't let" + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + "in to see Mad Max");
        }
    }
}



for(var i = 0; i < 101; i++){
    if(i % 2 === 0){
        console.log("Even")
    } else if(i % 2 !== 0){
        console.log("Odd")
    }
}