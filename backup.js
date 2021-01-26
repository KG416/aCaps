doneBtn.addEventListener('click', evt => {

    //Remove whitespace + make answer lower case
    let currentAnswer = answerInput.value.trim().toLowerCase();

    console.log('currentAnswer = ' + currentAnswer);

    if (currentAnswer === questionsArr[questionsArrIndex].correctAnswers[0]) {
        isCorrect = true;
        resultMessage();

    } else if (currentAnswer === questionsArr[questionsArrIndex].correctAnswers[1]) {
        isCorrect = true;
        resultMessage();

    } else if (currentAnswer === questionsArr[questionsArrIndex].correctAnswers[2]) {
        isCorrect = true;

    } else {
        isCorrect = false;
        resultMessage();
    }
    console.log('Current country is ' + currentCountry);
});







doneBtn.addEventListener('click', evt => {
    //Remove whitespace + make answer lower case
    let currentAnswer = answerInput.value.trim().toLowerCase();
    console.log('currentAnswer = ' + currentAnswer);

    //Kollar om svaret stämmer + kör resultMessage();
    checkAnswer(currentAnswer);

});