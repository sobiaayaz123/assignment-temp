//1. Write a program that takes a character (number or string) 
//in a variable & checks whether the given input is a 
//number, uppercase letter or lower case letter. (Hint: ASCII 
//codes:- A=65, Z=90, a=97, z=122).


// var character = prompt("check a character");
// // ascii = ord(char)

// if (character >=48 && character <=65   ) {
//     alert(character + ' is a number')
// }
// else if (character  >= 65 && character <= 90){
//     alert(character + ' is an uppercase letter')
// }
// else if (character >=90     && character <= 122){
//     alert(character + ' is a lowercase letter')
// }
// else{
//     print(char + ' is not a number or letter')
// }







//2. Write a JavaScript program that accept two integers and
//display the larger. Also show if the two integers are equal.


// var num1 = +prompt("Enter the first number: ")
// var num2 =  +prompt("Enter the second number: ")

// if (num1 > num2) {
//     console.log(num1 + " is larger than " + num2)
// }
//  else if (num1 < num2) {
//     console.log(num1 + " is smallest than " + num2)
//  }
// else {
//     console.log("Both numbers are equal.");
// }



//3. Write a program that takes input a number from user & 
//state whether the number is positive, negative or zero.

// var number = +prompt("Enter a number: ")

// if (number > 0) {
    // alert("The number is positive.")
// }
// else if (number < 0)[
    // alert("The number is negative.")
// }
// else{
    // alert("The number is zero.")
// }


//4.Write a program that takes a character (i.e. string of
//length 1) and returns true if it is a vowel, false otherwise


// var vowel = prompt('Enter a character: ')
// var vowelLetters = ('a','e','i','o','u')

// if (vowel === 'vowelLeters' ||  vowel ===  'VowelLeters'){
//     alert(vowel + " is a True")
// }
// else {
//     alert(vowel + " is a False")
// }


//5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then
//give message “ Please enter your password”
//ii. Check if both passwords are same. If they are
//same, show message “Correct! The password you
//entered matches the original password”. Show
//“Incorrect password” otherwise


// var correctPassword = "0123456xyz"; 
// var userPassword = prompt("Enter your password: ");

//  if (userPassword) {
//    alert('Please enter your password');} 
//  else if (userPassword === correctPassword) {
//   alert('Correct! The password you entered matches the original password');
// } else {
//   alert('Incorrect password');
// }


//6. This if/else statement does not work. Try to fix it:


// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Have a Good day";
// } else {
//   greeting = "Good night";
// }


//7. Write a program that takes time as input from user in 24
//hours clock format like: 1900 = 7pm. Implement the
//following case using if, else & else if statements


// var time = prompt('Enter the time in 24 hours clock format (1900 = 7pm): ');

// if (time >= 0000 && time < 1200) {
//   console.log('Good Morning');
// } 
// else if (time >= 1200 && time < 1700) {
//     console.log('Good Afternoon')
// }
//   else if (time >= 1700 && time < 2100) {
//     console.log('Good Evening');
//   }
// else if (time >= 2100 && time < 2359){
//     console.log('Good Night');
//   }
// else {
//   console.log('Invalid time entered');
// }





