console.log('script.js is connected')
let qNum = 0;
let scoreRight = 0;
let scoreWrong =0;

function startQuiz(){
  $('#main-box').on('click', '.nextButton', event=>{
    $('#main-box').empty();
    $('.questionNumber').text(1);
    renderQuestion();
  })
};

function renderQuestion(){
  if (qNum < quizData.length){
    console.log('adding question info');
    $('#main-box').html('<form><label>'+quizData[qNum].question+'</label><br><img src="'+quizData[qNum].img+'"><alt>'+quizData[qNum].alt+'</alt><input type="radio"  value="answer1" >'+quizData[qNum].answer1+'<input type="radio"  value="answer2">'+quizData[qNum].answer2+'<br><input type="radio"  value="answer3">'+quizData[qNum].answer3+'<input type="radio"  value="answer4">'+quizData[qNum].answer4+'<br><br><br><input type="submit" value="Submit"></form>');

  } else {
      console.log('ready to give total score');
  }
};

function handleUserAnswer(){
    $('form').on('submit', function (event) {
        console.log('submittion accapted');
        let selected = $('input:checked');
        let userAnswer = selected.val();
    if (correctAnswer[qNum]===userAnswer){
        $('#main-box').html('<label>That`s right!</label><br><button type="button" class="nextButton">Next!</button>')
    } else {
        $('#main-box').html('<label>Woops! You better watch more movies</label><br><button type="button" class="nextButton">Next!</button>')
    }
    })
    };

function runQuiz(){
  startQuiz(); //removes opening text, change questionNumber Pull next question from datastore
  handleUserAnswer();//accept submit, compare to correct, give rightor wrong, add to score, add to q number;
};

$(runQuiz);