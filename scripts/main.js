function squareNumber(Num) {
   Num * Num;
	console.log("The result of squaring the number " + Num + " is " + squareNumber);
    return squareNumber;
}

function halfNumber(mainNum){
    var half = mainNum / 2 ;
	console.log("Half of " + mainNum + " is " + half);
    return half;
}

function percentOf(numOne, numTwo) {
	var percent = (numOne / numTwo) * 100;
	console.log(numOne + " is " + percentOf + "% of " + numTwo);
    return percent;
}

function areaOfCircle(radius) {
    var pi = 3.14;
	var area = pi * squareNumber(radius);
	console.log("The area for a circle with a radius of " + radius + " is " + area);
    return area;
}

function theHardOne(numNum){
    var half = halfNumber(numNum);
    var newRadius = squareNumber(half);
    var areaNew = areaOfCircle(newRadius);
    var number4 = percentOf(newRadius, areaNew);
}

theHardOne(10);




/*Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
