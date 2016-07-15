

alert('to my website');
//This is an alert it will pop up when the website loads
function changeMe(){
	document.getElementById('vi').innerHTML= "I lied"
};

var Myinterests = ["coding","video games","guitar"];
console.log(Myinterests);
// This created a group named My interests and now whenever I ask the console log to
//display said group it will show everything I put in the group
alert(Myinterests);
// This will also make what I put in the group pop up as an alert
var user = {firstName: 'Blake',lastName:' Wilkey'};
// this is an object. when I put either firstName or lastName into the console.log my first name or last name will show up.
//I used strings but could have easily used numbers as another data type to go into the spot that 'blake'/'wilkey' is in
console.log(user.firstName + " " + user.lastName);
var array1 = ['This','That','The_other_thing'] 
//This is an array it is also used to hold data and can be accessed by using numbers.
var x = 2;
//this x is a global variable
console.log(x);
//This is a local function
function printit(z){
// we will define what goes in z
	alert(z^2);
//this will show us what we inserted for z
	console.log(z);
//the actual function goes here you can change it around 
}
//this is a global function
printit(23);
//this will put 23 as the z. if we change 23 and x then we will be using the global x variable
//stated above.
var x=6;
if (x<10) {alert('your variable is smaller than ten please choose a smaller one')}else{'Thank you'}
//This is an if than statement since 12 is greater than 10 my alert happened if I chose a number that was smaller than 10 my alert would not 
//have shown up 

var y=12;
if (y<10) {alert('your variable is smaller than ten please choose a smaller one')}else if (y>10){alert('Thank you')}

console.log(5===3)
//This tests if 5=3 since its not true it says in the console false.
function return1(numberOne, otherNumber){
	return (numberOne + 10 +otherNumber);
}
//the return tells you later on to return the number that is comes out of the function. If you dont put return it will come out as undefined 
console.log(return1(4,14));
//these variables are put into numberOne and other number 

function something(dialog){
	return alert(dialog);
	console.log(dialog);
}
something("Blake");

var x = 6

var y = 12

console.log(x+y)

var user = {company:'Toyota',car:'Camry'};

console.log(user.company+" "+user.car)

 

