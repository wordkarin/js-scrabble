var Scrabble = function() {};

// Different classes live within this Scrabble "module?"
// "Classes" include the scoring class, and the player class (later the tilebag)
// Set up const array of letter and score? const name1 = value1
// add a function (score word) to the class for scoring, that takes in a string word and returns a score for that word.
// need to account for case insensitivity somehow (in ruby version, had another function that validated the word and made it all upcase)
// add a function to the scoring class called: highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
// Note that it’s better to use fewer tiles, so if the top score is tied between multiple words, pick the one with the fewest letters.
// Note that there is a bonus (50 points) for using all seven letters. If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles.
// If the there are multiple words that are the same score and same length, pick the first one in supplied list.



Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;


// Here is where you run the program?
var s = new Scrabble();
console.log(s.helloWorld());
