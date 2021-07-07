let qNum = 0;  //set question number
let scoreRight = 0;  //set number of right answers
let scoreWrong = 0;  //set number of wrong answers

//start/restart quiz
function restartQuiz() {
  $('#main-box').on('click', '.restartButton', event =>{
    qNum*=0;
    scoreRight*=0;
    scoreWrong*=0;
    displayQuestionNumber();
    scoreTally();
    $('#main-box').html('<p>"You`ve got to ask yourself one question: `Do I feel lucky?` Well, do ya, punk?"<br>-- Dirty Harry</p><button type="button" class="nextButton">Action!</button>')
  })
};

//show the question number player is currently on
function displayQuestionNumber(){
  if (qNum <=10){
  $('.questionNumber').text(qNum);
} else {
  $('.questionNumber').text(10);
}
};

//start quiz and move along to next question
function startQuiz(){
  $('#main-box').on('click', '.nextButton', event=>{
    $('#main-box').empty();
    qNum++;
    displayQuestionNumber();
    renderQuestion();
  })
};

//show final score and a quote based on how well player did
function finalScore(){
  if (scoreRight <=5){
    $('#main-box').html(`<p>Your score was ${scoreRight}/10</p><p>"Dishonour! Dishonour on your whole family! Make a note of this: Dishonour on you! Dishonour on your cow!"<br>-- Mulan</p><br><br><button type="button" class="restartButton">Take the Quiz again!</button>`);  
  } else if (scoreRight>5 && scoreRight<7){
    $('#main-box').html(`<p>Your score was ${scoreRight}/10</p><p>"You don\`t understand! I coulda had class. I coulda been a contender. I could\`ve been somebody, instead of a bum, which is what I am."<br>-- On the Waterfront</p><br><br><button type="button" class="restartButton">Take the Quiz again!</button>`);
  } else if (scoreRight==8 || scoreRight==9){
    $('#main-box').html(`<p>Your score was ${scoreRight}/10</p><p>"You\`re gonna need a bigger boat."<br>-- Jaws</p><br><br><button type="button" class="restartButton">Take the Quiz again!</button>`);
  } else {
    $('#main-box').html(`<p>Your score was ${scoreRight}/10</p><p>"You\`re so wise. You\`re like a miniature Buddha, covered in hair."<br>-- Ron Burgundy to his dog in "Anchorman: The Legend of Ron Burgundy</p><br><br><button type="button" class="restartButton">Take the Quiz again!</button>`);
  }
};

//pull question data from data.js and display
function renderQuestion(){
  if (qNum <= quizData.length){
    $('#main-box').html(`<legend class='words'>${quizData[qNum-1].question}</legend>
    <img src="${quizData[qNum-1].img}" alt=${quizData[qNum-1].alt}>
    <div class="answer" role="radiogroup">
      <div class="leftGroup">
        <input type="radio" id="answer1" role="radio" value="${quizData[qNum-1].answer1}" name="answer">
        <label for="answer1" class="option" tabindex="0">${quizData[qNum-1].answer1}</label>
      
        <input type="radio" id="answer2" role="radio" value="${quizData[qNum-1].answer2}" name="answer">
        <label for="answer2" class="option" tabindex="0">${quizData[qNum-1].answer2}</label>
      </div>
      <div class="rightGroup">
        <input type="radio" id="answer3" role="radio" value="${quizData[qNum-1].answer3}" name="answer">
        <label for="answer3" class="option" tabindex="0">${quizData[qNum-1].answer3}</label>
        
        <input type="radio" id="answer4" role="radio" value="${quizData[qNum-1].answer4}" name="answer">
        <label for="answer4" class="option" tabindex="0">${quizData[qNum-1].answer4}</label>
      </div>
    </div>
    <input type="submit" value="Final Answer" class="answerButton">`);
  } else {
    finalScore();
  }
};

//update score tally as game progresses
function scoreTally(){
    $('.numRight').text(scoreRight);
    $('.numWrong').text(scoreWrong);
};

//verify if answer was correct or incorrect and add to tally
function handleUserAnswer(){
  $('#main-box').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input[name="answer"]:checked');
    let userAnswer = selected.val();
    if (correctAnswer[qNum-1]===userAnswer){
      $('#main-box').html(`<img src="${moviePosters[qNum-1]}"<label>That\`s right!</label><br><button type="button" class="nextButton">Next!</button>`);
      scoreRight++;
      scoreTally();
    } else if (userAnswer==undefined){
      alert('Please select an answer.');
    } else {
      $('#main-box').html(`<img src="${moviePosters[qNum-1]}"<label>Woops! You better watch more movies</label><br><button type="button" class="nextButton">Next!</button>`);
      scoreWrong++;
      scoreTally();
    }
  })
};

function runQuiz(){
  scoreTally();//show current score
  startQuiz(); //removes opening text, change questionNumber Pull next question from datastore
  handleUserAnswer();//accept submit, compare to correct, give rightor wrong, add to score, add to q number;
  restartQuiz();//set score and qnum back to zero, reload opening page
};

$(runQuiz);