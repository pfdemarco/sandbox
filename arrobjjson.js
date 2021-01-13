// Question	Which is a keyword to declare a JS variable?
// Choices	"the", "describe", "let"
// Answer	"let"
	
// Question	var x = {firstName:"John", lastName:"Doe"}; is a Number String or Object
// Choices	"number", "string", "object"
// Answer	"object"
	
// Question	What index is the BMW in? var cars = ["Saab", "Volvo", "BMW"];
// Choices	"1", "2", "3"
// Answer	"2"
	
// Question	What syntax is var x, y, z;
// Choices	"Declare Variables", "Assign Values", "Compute Values"
// Answer	"Declare Variables"
	
// Question	What syntax is x = 5; y = 6;
// Choices	"Declare Variables", "Assign Values", "Compute Values"
// Answer	"Declare Variables"
	
// Question	What syntax is z = x + y;
// Choices	"Declare Variables", "Assign Values", "Compute Values"
// Answer	"Compute Values"

//JSON.parse() to objectify the data 
var objTryOut = [
  {
    question: "Which is a keyword to declare a JS variable?",
    choices: ["the", "describe", "let"],
    answer: "let",
  },
  {
    question: "What is var x = {firstName:John, lastName:Doe};",
    choices: ["number", "string", "object"],
    answer: "object",
  },
  {
    question: "What index is the BMW in? var cars = [Saab, Volvo, BMW];",
    choices: ["1", "2", "3"],
    answer: "2",
  },
  {
    question: "What syntax is var x, y, z;",
    choices: ["Declare Variables", "Assign Values", "Compute Values"],
    answer: "Declare Variables",
  },
  {
    question: "What syntax is x = 5; y = 6;",
    choices: ["Declare Variables", "Assign Values", "Compute Values"],
    answer: "Assign Values",
  },
  {
    question: "What syntax is z = x + y",
    choices: ["Declare Variables", "Assign Values", "Compute Values"],
    answer: "Compute Values",
  }
]

console.log(objTryOut[0].choices[0]);
// console.log(objTryOut.forEach(function(elem){
//   console.log(elem);
// }));

var indexnum = 0;
var GAMEOVER = false;
var cho = $("#choice");
var quest = $("#quest");

function init(){ 
  funUpdateQuestions();
}
//go thru array and populate the li woith the choices
function funUpdateQuestions(){
  //get the choices out of the array and stick them in the li 
  var q = objTryOut[indexnum];
  console.log(q);
  quest.text(q.question);

  console.log(cho);
  cho.children().each(function(i, elem){
    console.log(i, elem);
    var $elem = $(elem);//wraps vanilla javascrip node in DOM in a jquery object
  });
}



var button = $("#but");
button.on("click", function(){
  console.log(objTryOut[indexnum]);
  indexnum++;
  if (indexnum >= objTryOut.length){
    GAMEOVER === true;
    button.attr("disabled", true);
  }
  else{
    funUpdateQuestions();
  }
  
})

init();



// // This line of jQuery selects the div with the matching id (#drink-options)
// var drinkDiv = $("#ques");

// // For Loop then loops through our total drink list...
// for (var i = 0; i < objTryOut.length; i++) {

//   // It then creates a new div for each drink. Note we create divs and add the content in the same line.
//   var nextQues = $("<div>" + objTryOut[i] + "</div>");

//   // It then adds this new div to the drinkList div.
//   drinkDiv.append(nextQues);
// }
