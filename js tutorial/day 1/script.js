'use strict';

let message = "I am in";
alert(message);

let userInput = prompt("Enter the secret phrase to access the site:");

if (userInput === "I am in") {
    alert("Welcome! Enter the site.");
} else {
    alert("Input mismatch. Please try again.");
}
