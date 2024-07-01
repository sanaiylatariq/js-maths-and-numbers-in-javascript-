// numbers and maths in javascript
// const value = 800
// console.log(value);
// converting number to string

// const score = new Number(600)
// console.log(score);
// console.log(score.toString().length);
// to fixed yani how many zeros after value yani 23.00 a 23.0
// console.log(score.toFixed(7));
// const score1 = 23.666
//to  precision means ktna precise karna hay 3 mtlb 3 digits 23.5
// console.log(score1.toPrecision(4));
// const score2 = 1000000
//to local string usya commas k st separate krta hay ta k zeros ap dkh sko
// console.log(score2.toLocaleString(`en-PK`));
// en k bad use pak or india or whatever
// console.log(score2.toLocaleString(`en-IN`));
// console.log(score2.toLocaleString(`en-UK`));
// console.log(score2.toExponential());
// const sunny = new Number(40)
// console.log(sunny);
// console.log(sunny.toExponential());
// console.log(sunny.toPrecision(4));
// console.log(sunny.toLocaleString().length);


/////// Maths/////////
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(5.9));
// console.log(Math.exp(1000000));
// console.log(Math.log(1000000));
// console.log(Math.tan(45));
// let sunny = new Number(1000000)
// console.log(sunny.toLocaleString());
// console.log(Math.round(586.7856));
// console.log(Math.pow(25,60));
// console.log(Math.sqrt(625));
// console.log(Math.random()+1);
// console.log(Math.random()*20+1);
const min = 20
const max = 40
// floor mn choti value aati yani 20.10 ka 20 and ceil mmn 21 . random mn 0 to 1 to * wd 10 add 1 put in floor then console log add max or min in log and results

// console.log((Math.floor(Math.random()*20+1)) + min)
// console.log(Math.floor(20.10));
// console.log(Math.ceil(20.10));
// console.log((Math.floor(Math.random()*10+1))+max);
console.log(Math.floor(20.10));
console.log(Math.ceil(20.10));
console.log((Math.floor((Math.random()*10+1)))+max);
console.log((Math.floor((Math.random()*10+1)))+min);