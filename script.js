//Write capitals with lower case (since users answers are made lower case)
//Put ALL correctAnswers in an array (even if there is only one)
const questionsArr = [
    {
        country: 'Egypt',
        capitalName: 'Cairo',
        correctAnswers: ['cairo', 'kairo', 'kario', 'cario'],
        flagURL: 'img/flags/egypt.png',
        nr: 1,
    },
    {
        country: 'South Africa',
        capitalName: 'Pretoria',
        correctAnswers: ['pretoria', 'pertoria', 'pretria'],
        flagURL: 'img/flags/southAfrica.png',
        nr: 2,
    },
    {
        country: 'Rwanda',
        capitalName: 'Kigali',
        correctAnswers: ['kigali', 'kiglai'],
        flagURL: 'img/flags/rwanda.png',
        nr: 3,
    }
];

//This value increases with 1 when user press next-btn
let questionsArrIndex = 0;

//Give initial value to these. Change to empty str or something, if you make order random later
let currentCountry = questionsArr[questionsArrIndex].country;
let currentCapital = questionsArr[questionsArrIndex].capitalName;

//Temp boolean that applies for the current question
let isCorrect = false;

/* =================
    QUERY SELECTORS start
   =================
*/

const doneBtn = document.querySelector('.check-btn');
const nextBtn = document.querySelector('.next-btn');
const answerInput = document.querySelector('.answer-input');
const correctMsg = document.querySelector('.correct-message');
const wrongMsg = document.querySelector('.wrong-message');
const currentFlag = document.querySelector('.flag');


//Make the placeholder to first Country
answerInput.placeholder = currentCountry;

/* =================
    QUERY SELECTORS end
   =================
*/


/* =================
    EVENT LISTENERS start
   =================
*/

doneBtn.addEventListener('click', checkAnswer)
nextBtn.addEventListener('click', nextQuestion)

/* =================
    EVENT LISTENERS end
   =================
*/

/* =================
    FUNCTIONS start
   =================
*/

function checkAnswer() {
    //Remove whitespace + make answer lower case
    let currentAnswer = answerInput.value.trim().toLowerCase();
    console.log('currentAnswer = ' + currentAnswer);

    //Kollar om svaret stämmer + kör resultMessage();
    answerFeedback(currentAnswer);
}

function answerFeedback (answer) {
    
    for (let i = 0; i < questionsArr[questionsArrIndex].correctAnswers.length; i++) {
        if (answer === questionsArr[questionsArrIndex].correctAnswers[i]) {
            isCorrect = true;
            resultMessage();
            }
        }
        if (isCorrect === false) {
            resultMessage();
        }
    }

function resultMessage () {
    if (isCorrect === true) {
        correctMsg.innerHTML = `Correct! The capital of ${currentCountry} is <b> ${currentCapital}<b/>.`;
    } else {
        wrongMsg.innerHTML = `Wrong, the capital of ${currentCountry} is <b> ${currentCapital}<b/>.`;
    }
    
    //Hide check-btn
    doneBtn.style.display = 'none';

    //Show next-btn
    nextBtn.style.display = 'inline';
};

function nextQuestion() {
    //Add 1 to arrIndex + go to next country/object
    questionsArrIndex++;
    currentCountry = questionsArr[questionsArrIndex].country;
    currentCapital = questionsArr[questionsArrIndex].capitalName;

    console.log('Current country is ' + currentCountry);
    console.log('questionsArrIndex is now ' + questionsArrIndex);

    //Hide next-btn
    nextBtn.style.display = 'none';

    //Show check-btn
    doneBtn.style.display = 'inline';

    //Remove answer message
    correctMsg.innerHTML = '';
    wrongMsg.innerHTML = '';

    //Clear user input
    answerInput.value = '';

    //Make placeholder current country
    answerInput.placeholder = currentCountry;

    //Change isCorrect back to default (false)
    isCorrect = false;

    //Update the flag
    currentFlag.src = questionsArr[questionsArrIndex].flagURL;
};

/* =================
    FUNCTIONS end
   =================
*/