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
    },
    {
        country: 'Algeria',
        capitalName: 'Algiers',
        correctAnswers: ['algiers', 'alger'],
        flagURL: 'img/flags/algeria.png',
        nr: 4,
    },
    {
        country: 'Chad',
        capitalName: "N'Djamena",
        correctAnswers: ["n'djamena", "ndjamena", "endjamena", "n djamena", "en djamena"],
        flagURL: 'img/flags/chad.png',
        nr: 5,
    },
    {
        country: 'Nigeria',
        capitalName: "Abuja",
        correctAnswers: ["abuja", "aboja", "abouja", "abouya", "abuya", "aboya"],
        flagURL: 'img/flags/nigeria.png',
        nr: 6,
    },
    {
        country: 'Ethiopia',
        capitalName: "Addis Ababa",
        correctAnswers: ["addis ababa", "addis abeba", "adis ababa", "adis abbaba", "adis abbeba"],
        flagURL: 'img/flags/ethiopia.png',
        nr: 7,
    },
    {
        country: 'Democratic Republic of the Congo',
        capitalName: "Kinshasa",
        correctAnswers: ["kinshasa", "kinchasa"],
        flagURL: 'img/flags/democraticRepublicOfTheCongo.png',
        nr: 8,
    },
    {
        country: 'Tanzania',
        capitalName: "Dodoma",
        correctAnswers: ["dodoma", "dodouma"],
        flagURL: 'img/flags/tanzania.png',
        nr: 9,
    },
    {
        country: 'Kenya',
        capitalName: "Nairobi",
        correctAnswers: ["nairobi", "najrobi"],
        flagURL: 'img/flags/kenya.png',
        nr: 10,
    },
    {
        country: 'Uganda',
        capitalName: "Kampala",
        correctAnswers: ["kampala", "campala"],
        flagURL: 'img/flags/uganda.png',
        nr: 11,
    },
    {
        country: 'Sudan',
        capitalName: "Khartoum",
        correctAnswers: ["khartoum", "kartoum", "kahrtoum", "cartoum"],
        flagURL: 'img/flags/sudan.png',
        nr: 12,
    },
    {
        country: 'Morocco',
        capitalName: "Rabat",
        correctAnswers: ["rabat", "rabath", "rabbat", "rabatt", "rabbatt"],
        flagURL: 'img/flags/morocco.png',
        nr: 13,
    },
    {
        country: 'Mozambique',
        capitalName: "Maputo",
        correctAnswers: ["maputo", "maputho", "mapputo"],
        flagURL: 'img/flags/mozambique.png',
        nr: 14,
    },
    {
        country: 'Ghana',
        capitalName: "Accra",
        correctAnswers: ["accra", "acra", "akra"],
        flagURL: 'img/flags/ghana.png',
        nr: 15,
    },
    {
        country: 'Angola',
        capitalName: "Luanda",
        correctAnswers: ["luanda", "luadna"],
        flagURL: 'img/flags/angola.png',
        nr: 16,
    },
    {
        country: 'Somalia',
        capitalName: "Mogadishu",
        correctAnswers: ["mogadishu", "mogadihsu", "mogadichu"],
        flagURL: 'img/flags/somalia.png',
        nr: 17,
    },
    {
        country: 'Ivory Coast',
        capitalName: "Yamoussoukro",
        correctAnswers: ["yamoussoukro", "yamosokro", "jamousoukro", "yamousoukro"],
        flagURL: 'img/flags/ivoryCoast.png',
        nr: 18,
    },
    {
        country: 'Madagascar',
        capitalName: "Antananarivo",
        correctAnswers: ["antananarivo", "antanarivo", "antanananarivo"],
        flagURL: 'img/flags/madagascar.png',
        nr: 19,
    },
    {
        country: 'Cameroon',
        capitalName: "Yaoundé",
        correctAnswers: ["yaoundé", "yaounde", "yaonde", "yaunde",],
        flagURL: 'img/flags/cameroon.png',
        nr: 20,
    },
];









/* =================
    INITIAL VALUES start
   =================
*/

//This value increases with 1 when user press next-btn
let questionsArrIndex = 0;

//1 is added per correct answer
let score = 0;

//Give initial value to these. Change to empty str or something, if you make order random later
let currentCountry = questionsArr[questionsArrIndex].country;
let currentCapital = questionsArr[questionsArrIndex].capitalName;

//Temp boolean that applies for the current question
let isCorrect = false;

/* =================
    INITIAL VALUES end
   =================
*/









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
const infoScore = document.querySelector('.info-score');
const infoQuestion = document.querySelector('.info-question');
const infoQuestionsLeft = document.querySelector('.info-questions-left');

/* =========== Some more initial values of variables ===========*/

//Render 0 as current score
infoScore.innerHTML = score;

//Render 54 as questions left
infoQuestionsLeft.innerHTML = '54';

//Render 1/54 as question number
infoQuestion.innerHTML = '1/54';

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

/* Enable enter-btn START */
answerInput.addEventListener('keyup', event => {
    //if nextBtn is not visible = run checkAnswer
    if (event.keyCode === 13 && nextBtn.style.display !== 'inline') {
        checkAnswer();
        //if nextBtn is visible = run nextQuestion
    } else if (event.keyCode === 13 && nextBtn.style.display === 'inline') {
        nextQuestion();
    }
})
/* Enable enter-btn END */

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

function answerFeedback(answer) {

    for (let i = 0; i < questionsArr[questionsArrIndex].correctAnswers.length; i++) {
        if (answer === questionsArr[questionsArrIndex].correctAnswers[i]) {
            isCorrect = true;
            infoScore.innerHTML = score += 1;
            resultMessage();
        }
    }
    if (isCorrect === false) {
        resultMessage();
    }
}

function resultMessage() {
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
    //Updates user info (questions left)
    let qLeft = 54 - (questionsArrIndex + 1);
    infoQuestionsLeft.innerHTML = qLeft.toString();

    //Updates user info (question-nr)
    infoQuestion.innerHTML = (questionsArrIndex + 1) + 1 + '/54';

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