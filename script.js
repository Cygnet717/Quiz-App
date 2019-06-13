console.log('script.js is connected')
let qNum = 0;
let scoreRight = 0;
let scoreWrong = 0;

function startQuiz(){
  $('#main-box').on('click', '.nextButton', event=>{
    $('#main-box').empty();
    qNum++;
    $('.questionNumber').text(qNum);
    renderQuestion();
  })
};

function renderQuestion(){
  if (qNum < quizData.length){
    console.log('adding question info');
    $('#main-box').html('<form><label>'+quizData[qNum-1].question+'</label><br><img src="'+quizData[qNum-1].img+'" alt='+quizData[qNum-1].alt+'><br><input type="radio"  value="answer1" >'+quizData[qNum-1].answer1+'<input type="radio"  value="answer2">'+quizData[qNum-1].answer2+'<br><input type="radio"  value="answer3">'+quizData[qNum-1].answer3+'<input type="radio"  value="answer4">'+quizData[qNum-1].answer4+'<br><br><br><input type="submit" value="Submit" class="answerButton"></form>');

  } else {
      console.log('ready to give total score');
  }
};

function scoreTally(){
    $('.numRight').text(scoreRight);
    $('.numWrong').text(scoreWrong);
};

function handleUserAnswer(){
    $('#main-box').on('submit', function (event) {
        event.preventDefault();
        let selected = $('input:checked');
        console.log (selected);
        let userAnswer = selected.val();
    if (correctAnswer[qNum-1]===userAnswer){
        $('#main-box').html('<label>That`s right!</label><br><button type="button" class="nextButton">Next!</button>');
        scoreRight++;
        scoreTally();
    } else {
        $('#main-box').html('<label>Woops! You better watch more movies</label><br><button type="button" class="nextButton">Next!</button>');
        scoreWrong++;
        scoreTally();
    }

    })
    };

function runQuiz(){
    scoreTally();//show current score
    startQuiz(); //removes opening text, change questionNumber Pull next question from datastore
    handleUserAnswer();//accept submit, compare to correct, give rightor wrong, add to score, add to q number;
};

$(runQuiz);