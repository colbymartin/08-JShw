//  Problem #1: tallest mountain
console.log('<--------------------#1: The Tallest Mountain--------------------->');

/*
    Given an array of heights of mountains, print out the height of the tallest one.

    Step #1 (steps):
        - want to choose highest numerical value in array
        - want to run through and look at each value in array 
        - if it's higher than previous total, make that the new total
    Step #2 (inputs and outputs):
        - Inputs: heights of mountains
        - Outputs: highest value (greater than others)
    Step #3 (code)
*/

let heights = [48839, 98239, 102930, 90739, 74450, 200899, 19333]; 

let tallest = heights[0];

for (let count = 0; count < heights.length; count = count + 1) {
    if (heights[count] > tallest) {
        tallest = heights[count];
    }
}

console.log(tallest);

// Problem #2: Hangman Lite
console.log('<------------------#2: Hangman Lite---------------------->');

/* 

Steps:
    1. Start at the beginning of word (c)
    2. check each letter, to see if it matches guessed letter
        - If yes, tally as a count 
        - If no, keep moving
    3. Once we get to end, add counts that the letter was present. If not present at all, trigger "nope statment"

    Inputs: letters in word
    Outputs: Phrases
*/

let word = 'coffee';
let letter = 'e';
let occurence = 0;
let guess = false;

for (let count= 0; count < word.length; count = count + 1) {
    if (word[count] === letter) {
        guess = true;
        occurence = occurence + 1;
    }
}

if (guess) {
    console.log('Yes, the letter ' + letter + ' exists ' + occurence + ' times in my word');
} else {
    console.log("Nope,that letter doesn't exist in my word");
}

// Problem #3: Cherokee Hare
console.log('<-----------------#3: Cherokee Hare------------------->');

/*
    1. Want to calculate total hares after x amount of weeks, given the birthrate and the starting population.
    2. Multiply the starting population by the birth rate. 
    3. Multiply that by the number of weeks this breeding is being measured.
    4. Add that number to the starting population (we assume mortalitly rate is 0)

    Inputs: starting population, number of weeks, and birthrate
    Output: total hares after amount of weeks
*/

let startingPopulation = 75;
let birthRate = .25;
let weeks = 10;

let totalHares = startingPopulation + (startingPopulation * birthRate * weeks);

console.log('There will be ' + totalHares + ' Cherokee Hares after ' + weeks + ' weeks');

// Problem #4: Change Machine 
console.log('<--------------------#4 Change Machine---------------------->');

let amount = 897;
let twenties = Math.floor(amount / 20);
if (twenties > 0) {
    amount = amount - (twenties * 20);
}
let tens = Math.floor(amount / 10);
if (tens > 0) {
    amount = amount - (tens * 10);
}
let fives = Math.floor(amount / 5);
if (fives > 0) {
    amount = amount - (fives * 5);
}
let ones = Math.floor(amount /1);

console.log(twenties, tens, fives, ones);

// Problem #5: Palindrone
console.log('<-----------------------#5: Palindrone-------------------------->');
/*
1. take a word as a string
2. split string into array
3. reverse order of array
4. turn reversed array back into a string
5. take orginal string, seperate into array and then back into string  (so it matches format)
6. Compare the two strings. If equal, it is a palindrone
*/



let palinword = 'kayak';

// Split string into array
let wordsplit = palinword.split("");

// reverse order of array
wordsplit.reverse();

// turn reversed array back into a script (seperated by commas)
let reversestring = wordsplit.toString();

// turn original array back into string (seperated by commas)
palinword = palinword.split("");
palinword = palinword.toString();


if (palinword === reversestring) {
    console.log('TRUE');
}
if (palinword !== reversestring) {
    console.log('FALSE');
}