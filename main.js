/*


=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

//======================FOR LOOP TO FOR SOLVING THE PROBLEM WITH A LARGER ARRAY.  REVISIT AFTER LOOKING AT OTHER HOMEWORK
// var array[2, 4, 5, 6, 7, 8]
// function greater(array){
//   var newArray("")=array
//   for (i=0; i<array.length; i++){
//     if
//   }
// };

function greater(n1, n2) {
  if (n1>n2) {
    return(n1 + " is greater than " + n2)
  } else if (n1<n2){
    return(n2 + " is greater than "+ n1)
  } else if (n1=== n2){
    return("The numbers are equal")
  } else {
    return("Please enter a number")
  }
};
console.log(greater(3,3));


document.getElementById("btn1").addEventListener("click", function(){
  document.getElementById("q1").innerHTML = greater(document.getElementById("in1A").value,document.getElementById("in1B").value)
});



// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3(n1,n2,n3){
  var array = [n1,n2,n3];
  var soln = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i]<soln) {soln = array[i]
    }
  }
  return soln
};
answer = (minimum3(3,27,5));
// console.log(answer);

document.getElementById("btn2").addEventListener("click", function(){
  document.getElementById("q2").innerHTML = "The lowest number is: " +
  minimum3(document.getElementById("in2A").value,
  document.getElementById("in2B").value,document.getElementById("in2C").value)
});




// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

//====================WHY WILL THIS NOT WORK WITH CALLING VALUES OF FORMS
var numbers= [document.getElementById("in3a").value,document.getElementById("in3b").value,
document.getElementById("in3c").value,document.getElementById("in3d").value,
document.getElementById("in3e").value,document.getElementById("in3f").value
];

function sum(array){
  var soln = 0
  for (var i = 0; i < array.length; i++) {
    soln += array[i]
  }
  return soln
}
// console.log(sum(numbers));

document.getElementById("btn3").addEventListener("click", function(){
  document.getElementById("q3").innerHTML = "The sum of the numbers is: " + sum(numbers)
};



// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.






// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];






// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.






// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.




// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()





// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.






// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.






// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.






// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.
