#Factorial

A factorial is an operator that multiplies a number by all of the positive integers less than that number. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.

By definition, 0! = 1.

Make a web page to compute factorials.

Recursion
Once you finish your factorial page, I want to take a small break from these exercises to teach you about recursion. Recursion is when a method calls itself. Here's an example of how to use recursion to write the lyrics to 99 Bottles of Beer:

var bottlesOfBeer = function(number) {
  console.log(number + " bottles of beer on the wall...");
  if (number > 0) {
    bottlesOfBeer(number - 1);
  }        
};

bottlesOfBeer(99);
Once you have a grasp on how the recursive code is working in the above example, refactor your factorial function to use recursion.
