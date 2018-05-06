function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
  
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}
var uppercase ="HELLO!"
 uppercase.toUpperCase() === uppercase;
 
 var lowercase ="hello!"
  lowercase.toLowerCase === lowercase;

var mixedCase = "I love you, Grandma"
  mixedCase.toLowerCase === mixedCase;
  mixedCase.toUpperCase === mixedCase;
  
function sayHiToGrandma(string) {
  if (string.toLowerCase() === lowercase) {
    return "I can\'t hear you!";
  }
  else if (string.toUpperCase() === uppercase) {
    return "YES INDEED";
  }
  else (string.mixedCase === mixedCase){
    return "I love you, too.";
  }
}