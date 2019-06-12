console.log('script.js is connected')

function startQuiz(){
  $('#remove').on('click', '.nextButton', event=>{
    $('#remove').remove();
    $('.questionNumber').text(1);
  })
}

function renderQuestion(){
  
}

function runQuiz(){
  startQuiz(); //removes opening text, change questionNumber
  renderQuestion();//Pull next question from datastore
  //returnResult();
}

$(runQuiz);