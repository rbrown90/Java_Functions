// Exercise 1 Section
function printOdds(count) {
    for(let n = 1; n <= count; n++){
    if (n % 2 != 0) {
        console.log(n);
    }
  }
}
printOdds(20);
printOdds(120);

// Exercise 2 Section
function checkAge(userName, age){
    let var1 = `Congrats ${userName}, you can drive!`;
    let var2 = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16){
        console.log(var1);
    } else {
        console.log(var2);
    }
}

checkAge("Ashley,", 17);
checkAge("Bob", 14);
checkAge("Kevin", 24);

// Exercise 3 section
function quadrantCheck(x , y){
    switch(true){
        case x > 0 && y > 0:
            return "Quadrant 1";
        case x < 0 && y > 0:
            return "Quadrant 2";
        case x < 0 && y < 0:
            return "Quadrant 3";
        case x > 0 && y < 0:
            return "Quadrant 4";
        case x == 0 && y != 0:
            return "X Axis";
        case x != 0 && y == 0:
            return "Y Axis";
        default:
            return "Origin";
    }
}

console.log(quadrantCheck(9 , 1));
console.log(quadrantCheck(-9 , 1));
console.log(quadrantCheck(7 , 1));
console.log(quadrantCheck(7 , -1));
console.log(quadrantCheck(-9 , -1));
console.log(quadrantCheck(0 , -9));
console.log(quadrantCheck(9 , 0));
console.log(quadrantCheck(0 , 0));

// Exercise 4 section
function isCorrectTriangle(x, y, z){
    return x + y > z && x + z > y && y + z > x;
}

function checkTriangle(x, y, z){
    let isCorrect = isCorrectTriangle(x, y, z);
    if (isCorrect) {
        if(x == y && y == z) {
            return `Equilateral triangle`;
        } else if (x == y || y == z || x == z) {
            return `Isosceles triangle`;
        } else {
            return 'Scalene triangle';
        }
    } else {
        return `Not a correct triangle.`;
    }
}

console.log(checkTriangle(3, 3, 3));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(4, 5, 6));
console.log(checkTriangle(1, 1, 2));