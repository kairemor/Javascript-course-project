// the constructor for our objects
var Person = function(name, year, job){
	this.name = name  ; 
	this.year = year ; 
	this.job = job; 
}	
// we want the calculateAge method to be inherit by all our objects
Person.prototype.calculateAge = function(){
	age = new Date().getFullYear() - this.year ; 
	return age ; 	} 

// the last name property also will be inherite by by all objects
Person.prototype.lastName = 'smith'



let modou = new Person('modou',1992, 'student')
let john = new Person('jean', 1998,'developer')

console.log("the age of " + modou.name + " is  : " +   modou.calculateAge())
console.log("the age of " + john.name + " is  : " +   john.calculateAge())


console.log("the lastname of " + modou.name + " is  : " +   modou.lastName)
console.log("the lastname of " + john.name + " is  : " +   john.lastName)
	



// //function constructor
// //


// var km = {
// 	name : 'kaire', 
// 	birth : 1999 , 
// 	job : 'teacher'
// }

// var Person = function(name, year, job){
// 	this.name = name  ; 
// 	this.year = year ; 
// 	this.job = job; 

// 	this.calculateAge = function(){
// 		age = new Date().getYear() - this.year ;  }
// }	

// Person.prototype.calculateAge(){
// 	return age = new Date().getYear() - this.year ; }

// Person.prototype.lastName = 'smith'
// let modou = new Person('modou',1992, 'student')
	










































