/*
    Problem #1: tallest mountain

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
