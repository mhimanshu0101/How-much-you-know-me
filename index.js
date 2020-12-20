const chalk = require('chalk');
var readlineSync = require('readline-sync');

var score = 0;
// objects to keep highest scores data
var highScores = [
  {
    name: "Himanshu",
    score: 12 
  },
  {
    name: "Pooja",
    score: 10
  }
]

// friendly print function
function print(data){
  console.log(chalk.yellow.bold(data));
}

function play(question, answer){
  // correct answer response, to avoid index issue for array keeping size same.
  var rightResponse = [
    "Good One",
    "Right, Keep Going",
    "Nice",
    "Superb",
    "Awesome"
  ];
  // wrong answer response
  var wrongResponse = [
    "Incorrect",
    "Try another one",
    "Oops",
    "Wrong",
    "Bad"
  ];
  // Generate random response seletion
  var randomRightIndex = Math.floor(Math.random()*rightResponse.length);
  // var randomWrongResponse = Math.floor(Math.random()*wrongResponse.length);

  // Display question to user screen
  console.log(chalk.red(question))
  console.log('To quit type "exit" anytime.')
  var answered = '';
  var correct_options = ['A', 'B', 'C', 'D', 'EXIT'];

  // checks to verify correct option seletion
  while(!(correct_options.includes(answered.toUpperCase()))){
    answered = readlineSync.question('Select correct option: ');
  }

  // Exit the game
  if (answered.toUpperCase() === 'EXIT'){
    console.log(chalk.bgRed('GAME OVER !'))
    process.exit(0)
  }

  // process answer
  if (answered.toUpperCase() === answer.toUpperCase()){
      score++;
      console.log(chalk.green(rightResponse[randomRightIndex]));
  } else {
    console.log(chalk.green(wrongResponse[randomRightIndex]));
  }
  console.log('Current Score: '+ score);
}

print('Hey I am Jade! ')
print('This is "Know your fiend Quiz" game and I am your host, Who will be asking about Martial from you.')
print('Welcome '+readlineSync.question('May I have your name? '))

var questionArray = [
  {
    question:`Where Martial lives? 
    a: Patna
    b: Delhi
    c: Gurgaon
    d: Pune
    `,
    answer: "c"
  },
  {
    question: `What is his age? 
    a: 21
    b: 25
    c: 29
    d: 22
    `,
    answer: "b"
  },
  {
    question: `Which fiction Marvel series he loves to watch? 
    a: The Avengers
    b: Iron-Man
    c: Civil war
    d: Spider man
    `,
    answer: "b"
  },
  {
    question: `Which sports Martial love to play? 
    a: Cricket
    b: Martial Art
    c: Volleyball
    d: Badminton
    `,
    answer: "d"
  },
  {
    question: `What does he do as profession?
    a: Gymnastic
    b: Software Developer
    c: Doctor
    d: Lawyer
    `,
    answer: "b"
  },
  {
    question: `Which color of his hair? 
    a: brown
    b: black
    c: white
    d: Grey
    `,
    answer: "b"
  },
  {
    question: `On what planet does he lives? 
    a: Asgardian
    b: Nowhere
    c: Earth
    d: Wakanda
    `,
    answer: "c"
  },
  {
    question: `Which famous information TV channel he watches most? 
    a: Sony max
    b: Discovery
    c: Animal Planet
    d: Star Gold
    `,
    answer: "b"
  },
  {
    question: `When did he met his Girl friend? 
    a: Never
    b: One year ago
    c: 8 months ago
    d: 3 years ago
    `,
    answer: "c"
  },
  {
    question: `What is the name of his pet?
    a: Don't have any
    b: Jade
    c: Ronnie
    d: Tuffy
    `,
    answer: "b"
  }
]
var i = 0;
while (i< questionArray.length){
  play(questionArray[i].question, questionArray[i].answer)
  i++;

  // check level
  if(score%5 === 0){
    print('Congratulation! You have cleared level: '+~~(score/5))
  }
}
print('YAY! you scored: '+score)
print('<-----------Highest scorer------------->')
var j = 0

while (j<highScores.length){
  console.log(chalk.cyan(j+1+'. '+highScores[j].name+': '+highScores[j].score))
  j++;
}
print("If you have broken the record, to update mail me screenshot at mhimanshu0101@gmail.com")