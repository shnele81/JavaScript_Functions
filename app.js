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
checkAge("Andy", 44);
checkAge("Julie", 10);

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
        console.log("Axis Y")
    }
    else if (x != 0 && y == 0){
        console.log("Axis X")
    }else {
        console.log("Not in a Quadrant");
    }
}
quadrant(5, 8);
quadrant(0, 5);

//Exercise 4
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(sideOne, sideTwo, sideThree){
    let triangleType = "";
    if (sideOne + sideTwo <= sideThree || sideOne + sideThree <= sideTwo || sideTwo + sideThree <= sideOne){
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
    console.log(`These sides form a ${triangleType}`);
}
typeOfTriangle(5, 8, 7);
typeOfTriangle(5, 5, 5)
typeOfTriangle(1, 1, 4)

//Exercise 5
console.log("EXERCISE 5:\n==========\n");
function dataUsageStatus(planLimit, day, usage){
    const periodLength = 30;
    if(usage >= planLimit){
        console.log("You have used all of your data");
        return;
    }
    
    const remainingDays = periodLength - day;
    console.log(`${day} days used, ${remainingDays} days remaining`);
    
    const averageDailyUse = usage / day;
    console.log(`Average Daily Use: ${averageDailyUse.toFixed(2)}`);
    
    const averageDailyAllowedPace = planLimit / periodLength;
    
    const usagePace = averageDailyUse * periodLength;
    const overBy = usagePace - planLimit;
    const recommendedDailyUse = (planLimit - usage) / remainingDays;
    
    const remainingData = planLimit - usage;
    
    let statusUpdate;
    if(averageDailyUse > averageDailyAllowedPace){
        statusUpdate = `You are exceeding your ${averageDailyUse.toFixed(2)} by GB/day. If you continue at this pace you'll exceed your plan by ${overBy.toFixed(2)}. To stay below your usage plan, you will need to continue at ${recommendedDailyUse.toFixed(2)}`;
    }
    else {
        statusUpdate = `You are on track to stay below or equal to your plan. You have ${remainingData.toFixed(2)} GB left for the rest of your period. You can use up to ${recommendedDailyUse.toFixed(2)} GB/day.`;
    }
    
    console.log(statusUpdate);
}
dataUsageStatus(900, 14, 400);