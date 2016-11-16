var Scrabble = function() {};
// Different classes live within this Scrabble "module?"

// "Classes" include the scoring class, and the player class (later the tilebag)
// Set up object containing letters and scores?
var letterScores = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

var Scoring = function() {

};

// add a function (score word) to the class for scoring, that takes in a string word and returns a score for that word.
Scoring.score = function(word) {
  var wordScore = 0;
  // accounting for case insensitivity somehow (in ruby version, had another function that validated the word and made it all upcase, I'm just upcasing the word here, not validating it to be a string)
  var upWord = word.toUpperCase();
  var letters = upWord.split("");

  // word_array.each do |letter|
  //   word_score += LETTER_SCORE[letter]
  // end
  for (var i = 0; i < letters.length; i++){
    var letter = letters[i];
    wordScore += letterScores[letter];
  }

  // If word is 7 letters long, add 50 point bonus.
  if (letters.length == 7) {
    wordScore += 50;
  }

  return wordScore;

};

// add a function to the scoring class called: highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
Scoring.highestScoreFrom = function (arrayOfWords) {
  // Note that it’s better to use fewer tiles, so if the top score is tied between multiple words, pick the one with the fewest letters.
  // Store the words and their scores in an object.
  var maxScore = 0;
  var maxScoreWords = [];

  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    var score = Scoring.score(word);
      if (score > maxScore) {
        maxScoreWords = [word];
        maxScore = score;
      } else if (score == maxScore) {
        maxScoreWords.push(word);
      }
  }

  // check length of maxScoreWords, if it's 1, that's your highest scoring word and return it.
  if (maxScoreWords.length == 1) {
    return maxScoreWords[0];
  } else {
    // if length of maxScoreWords is longer than 1, set the shortest word to the first word.
    var shortestWordLength = maxScoreWords[0].length;
    var shortestWord = maxScoreWords[0];
    // loop through rest of maxScoreWords
    for (var j = 1; j < maxScoreWords.length; j++) {
      if (maxScoreWords[j].length < shortestWordLength ) {
        // if there's more than one word with the same score and same length, keep the first one
        // the shortest word is the winner
        shortestWordLength = maxScoreWords[j].length;
        shortestWord = maxScoreWords[j];
      } else if (maxScoreWords[j].length == 7) {
        // if any of the words is 7 letters long, that's the winner
        return maxScoreWords[j];
      }
      return shortestWord;
    }
  }
};



Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;


// Here is where you run the program?
//I can get back the score of the letter.
console.log(letterScores.Q);
var letter = "Q";
console.log(letterScores[letter]);


//I can make a new scrabble instance and call the helloWorld function on it.
var s = new Scrabble();
console.log(s.helloWorld());

// var scoring = new Scoring();
console.log("cat score is " + Scoring.score("cat"));
console.log("meow score is " + Scoring.score("meow"));
console.log("grape score is " + Scoring.score("grape"));
console.log("aarrghh score is " + Scoring.score("aarrghh"));

// A 7 letter word wins.
var words = ["cat", "meow", "grape", "date", "aarrghh"];
console.log(Scoring.highestScoreFrom(words) + " should be aarrghh.");

// A shorter word wins (meow and hatter have same score).
var words = ["HATTER", "MEOW", "CAT"];
console.log(Scoring.highestScoreFrom(words) + " should be meow.");

// A 7 letter word wins when same score as shorter word.
var words = ["QZQZZX", "aerated"];
console.log(Scoring.highestScoreFrom(words) + " should be aerated.");

// Two words with the same score and same length should return the first of the two words.
var words = ["FOOT", "TOMCAT", "KITTEN"];
console.log(Scoring.highestScoreFrom(words) + " should be tomcat.");
