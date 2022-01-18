//Case 1
const triangleOne = (10*13)/2;
console.log (triangleOne);

const triangleTwo = (16.5 *20.3)/2;
console.log (triangleTwo);

if (triangleOne > triangleTwo) {
    console.log (`The largest triangle is triangleOne with ${triangleOne} square cm`)
} else if (triangleOne == triangleTwo) {
        console.log (`The two triangles have the same area`)}
    else if (triangleOne < triangleTwo) {
        console.log (`The largest triangle is triangleTwo with ${triangleTwo} square cm`)
}

//Case 2
const triangleThree = (16.5*20.3)/2;
console.log (triangleThree);

const triangleFour = (20.3*16.5)/2;
console.log (triangleFour);

if (triangleThree > triangleFour) {
    console.log (`The largest triangle is triangleThree with ${triangleThree} square cm`)
} else if (triangleThree == triangleFour) {
        console.log (`The two triangles have the same area`)}
    else if (triangleThree < triangleFour) {
        console.log (`The largest triangle is triangleFour with ${triangleFour} square cm`)
}

//Case 3
const triangleFive = (7.8*5.6)/2;
console.log (triangleFive);

const triangleSix = (9.3*12.4)/2;
console.log (triangleSix);

if (triangleFive > triangleSix) {
    console.log (`The largest triangle is triangleFive with ${triangleFive} square cm`)
} else if (triangleFive == triangleSix) {
        console.log (`The two triangles have the same area`)}
    else if (triangleFive < triangleSix) {
        console.log (`The largest triangle is triangleSix with ${triangleSix} square cm`)
}

//Assignment answer:
//Multiplication and division has the same operator precedence and therefore will be from left to right,
//without parenthesis it will calculate the division on the height only.