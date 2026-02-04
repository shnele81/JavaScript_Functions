console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(let i= 1; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}
printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge (name, age){
    let aboveSixteen = (`Congrats ${name}, you can drive!`);
    let underSixteen = (`Sorry ${name}, but you have to wait until you are 16 years old`);
    if (age >= 16){
        console.log(aboveSixteen);
    }else{
        console.log(underSixteen);
    }
}
// Exercise 3
console.log("EXERCISE 3:\n==========\n");
function quadrant(x, y){
    if (x > 0 && y > 0){
        console.log("Quadrant One");
    }
    else if (x < 0 && y > 0){
        console.log("Quadrant Two");
    }
    else if (x < 0 && y < 0){
        console.log("Quadrant Three");
    }
    else if (x > 0 && y < 0){
        console.log("Quadrant Four");
    }
    else if (x == 0 && y != 0){
        console.log("Axis X")
    }
    else if (x != 0 && y == 0){
        console.log("Axis Y")
    }else {
        console.log("Not in a Quadrant");
    }
}

//Exercise 4
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(sideOne, sideTwo, sideThree){
    let triangleType = "";
    if (sideOne + sideTwo < sideThree || sideOne + sideThree < sideTwo || sideTwo + sideThree < sideOne){
        triangleType = "Invalid Triangle";
    }
    else if (sideOne == sideTwo && sideTwo == sideThree){
        triangleType = "Equilateral Triangle";
    }
    else if (sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree){
        triangleType = "Isosceles Triangle";
    }
    else{
        triangleType = "Scalene Triangle";
    }
    console.log("These sides form a {triangleType}");
}

//Exercise 5
console.log("EXERCISE 5:\n==========\n");
function dataUsageStatus(planLimit, day, usage){
    let periodLength = 30;
    let averageDailyUse = usage / day;
    let averageDailyAllowedPace = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let usagePace = averageDailyUse * remainingDays;
    let statusUpdate;
    let remainingData = planLimit - usage;
    
    console.log(`${day} days used, ${remainingDays} days remaining`);
    console.log(`Average Daily Use: ${averageDailyUse}`);
    
    if(averageDailyUse > averageDailyAllowedPace){
        statusUpdate = "Exceeding";
    }
    else if(averageDailyUse < averageDailyAllowedPace){
        statusUpdate = "Under";
    }
    else {
        statusUpdate = "At";
    }
    
    console.log(`You are ${statusUpdate} your average daily use (${averageDailyUse}), continuing this usage
    you'll end up using ${planLimit - usage + usagePace} of your plan. To stay below your usage plan, use no more than
    ${remainingData / remainingDays} GB per day.`) 
}