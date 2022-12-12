function square(value){
    console.log(value*value);
}
console.log("square of 5 :" );
square(5);
console.log("square of 6 :" );
square(6);
console.log("square of 25 :" );
square(25);
console.log("square of 100:" );
square(100);
console.log( typeof square);
console.log("--------Q-2----------");

var areaoftriangale = function ( base,height){
    var area = 1/2*(base*height);
    console.log( "total area of triangle =" + area);
}
areaoftriangale(45,34);
console.log("-------Q-3--------");

var rectangle = function(length,width){
    var rectangle= length*width;
    console.log("total area of rectangle =" + rectangle);
}
rectangle(499,917);

console.log("-------Q-6-------");
var strong = " javaScript the most popular language"
var count= strong.length
console.log(count);

var count= strong.indexOf("S");
console.log(count);

var count= strong.indexOf("lang");
console.log(count);