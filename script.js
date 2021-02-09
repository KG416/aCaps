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
    {
        country: 'Burkina Faso',
        capitalName: "Ouagadougou",
        correctAnswers: ["ouagadougou", "wagadogo", "ouagadogo", "ouagadougo",],
        flagURL: 'img/flags/burkinaFaso.png',
        nr: 21,
    },
    {
        country: 'Niger',
        capitalName: "Niamey",
        correctAnswers: ["niamey", "niamej", "njamey", "niamay",],
        flagURL: 'img/flags/niger.png',
        nr: 22,
    },
    {
        country: 'Malawai',
        capitalName: "Lilongwe",
        correctAnswers: ["lilongwe", "lilonge", "lilongwey", "lilongwy",],
        flagURL: 'img/flags/malawi.png',
        nr: 23,
    },
    {
        country: 'Zambia',
        capitalName: "Lusaka",
        correctAnswers: ["lusaka", "lussaka", "losaka",],
        flagURL: 'img/flags/zambia.png',
        nr: 24,
    },
    {
        country: 'Mali',
        capitalName: "Bamako",
        correctAnswers: ["bamako", "bamaku", "bamakou",],
        flagURL: 'img/flags/mali.png',
        nr: 25,
    },
    {
        country: 'Senegal',
        capitalName: "Dakar",
        correctAnswers: ["dakar", "dhakar", "dakhar",],
        flagURL: 'img/flags/senegal.png',
        nr: 26,
    },
    {
        country: 'Zimbabwe',
        capitalName: "Harare",
        correctAnswers: ["harare", "hararey", "harrare",],
        flagURL: 'img/flags/zimbabwe.png',
        nr: 27,
    },
    {
        country: 'Tunisia',
        capitalName: "Tunis",
        correctAnswers: ["tunis", "tuniz"],
        flagURL: 'img/flags/tunisia.png',
        nr: 28,
    },
    {
        country: 'Guinea',
        capitalName: "Conakry",
        correctAnswers: ["conakry", "konakry", "conacry", "conakrey"],
        flagURL: 'img/flags/guinea.png',
        nr: 29,
    },
    {
        country: 'Benin',
        capitalName: "Porto-Novo",
        correctAnswers: ["porto-novo", "portonovo", "porto novo", "port novo", "port-novo"],
        flagURL: 'img/flags/benin.png',
        nr: 30,
    },
    {
        country: 'Burundi',
        capitalName: "Gitega or Bujumbura",
        correctAnswers: ["bujumbura", "bujumbora", "gitega", "gittega"],
        flagURL: 'img/flags/burundi.png',
        nr: 31,
    },
    {
        country: 'South Sudan',
        capitalName: "Juba",
        correctAnswers: ["juba", "joba"],
        flagURL: 'img/flags/southSudan.png',
        nr: 32,
    },
    {
        country: 'Eritrea',
        capitalName: "Asmara",
        correctAnswers: ["asmara", "assmara", "asmarra"],
        flagURL: 'img/flags/eritrea.png',
        nr: 33,
    },
    {
        country: 'Sierra Leone',
        capitalName: "Freetown",
        correctAnswers: ["freetown", "fretown"],
        flagURL: 'img/flags/sierraLeone.png',
        nr: 34,
    },
    {
        country: 'Togo',
        capitalName: "Lomé",
        correctAnswers: ["lomé", "lome", "lume"],
        flagURL: 'img/flags/togo.png',
        nr: 35,
    },
    {
        country: 'Libya',
        capitalName: "Tripoli",
        correctAnswers: ["tripoli", "trippoli", "tripolli", "tripoly", "trippolli"],
        flagURL: 'img/flags/libya.png',
        nr: 36,
    },
    {
        country: 'Central African Republic',
        capitalName: "Bangui",
        correctAnswers: ["bangui", "bangi", "banguy"],
        flagURL: 'img/flags/centralAfricanRepublic.png',
        nr: 37,
    },
    {
        country: 'Mauritania',
        capitalName: "Nouakchott",
        correctAnswers: ["nouakchott", "nouakchot", "noakchott", "noakchot"],
        flagURL: 'img/flags/mauritania.png',
        nr: 38,
    },
    {
        country: 'Liberia',
        capitalName: "Monrovia",
        correctAnswers: ["monrovia", "monrovja", "monrouvia"],
        flagURL: 'img/flags/liberia.png',
        nr: 39,
    },
    {
        country: 'Namibia',
        capitalName: "Windhoek",
        correctAnswers: ["windhoek", "windoek", "whindoek", "windohek"],
        flagURL: 'img/flags/namibia.png',
        nr: 40,
    },
    {
        country: 'Botswana',
        capitalName: "Gaborone",
        correctAnswers: ["gaborone", "gabborone", "gaborrone"],
        flagURL: 'img/flags/botswana.png',
        nr: 41,
    },
    {
        country: 'Lesotho',
        capitalName: "Maseru",
        correctAnswers: ["maseru", "masseru", "maseur"],
        flagURL: 'img/flags/lesotho.png',
        nr: 42,
    },
    {
        country: 'The Gambia',
        capitalName: "Banjul",
        correctAnswers: ["banjul", "bannjul", "banjol"],
        flagURL: 'img/flags/theGambia.png',
        nr: 43,
    },
    {
        country: 'Gabon',
        capitalName: "Libreville",
        correctAnswers: ["libreville", "librevile", "liberville"],
        flagURL: 'img/flags/gabon.png',
        nr: 44,
    },
    {
        country: 'Guinea-Bissau',
        capitalName: "Bissau",
        correctAnswers: ["bissau", "bisau", "bissao", "bisao"],
        flagURL: 'img/flags/guinea-bissau.png',
        nr: 45,
    },
    {
        country: 'Mauritius',
        capitalName: "Port Louis",
        correctAnswers: ["port louis", "portlouis", "port-louis", "port louise", "port-louise",
            "port-louise", "portlouise", "port lois"],
        flagURL: 'img/flags/mauritius.png',
        nr: 46,
    },
    {
        country: 'Equatorial Guinea',
        capitalName: "Malabo",
        correctAnswers: ["malabo", "mallabo", "malaboo", "malabu"],
        flagURL: 'img/flags/equatorialGuinea.png',
        nr: 47,
    },
    {
        country: 'Eswatini',
        capitalName: "Mbabane",
        correctAnswers: ["mababane", "mbabanne", "embabane"],
        flagURL: 'img/flags/eswatini.png',
        nr: 48,
    },
    {
        country: 'Djibouti',
        capitalName: "Djibouti",
        correctAnswers: ["djibouti", "jibouti", "djiboti", "jiboti"],
        flagURL: 'img/flags/djibouti.png',
        nr: 49,
    },
    {
        country: 'Comoros',
        capitalName: "Moroni",
        correctAnswers: ["moroni", "morroni", "moronni"],
        flagURL: 'img/flags/comoros.png',
        nr: 50,
    },
    {
        country: 'Cape Verde',
        capitalName: "Praia",
        correctAnswers: ["praia", "praya", "praja"],
        flagURL: 'img/flags/capeVerde.png',
        nr: 51,
    },
    {
        country: 'São Tomé and Príncipe',
        capitalName: "São Tomé",
        correctAnswers: ["são tomé", "sao tome", "sao tomé", "são tome", "sao-tome", "saotome"],
        flagURL: 'img/flags/saoTomeAndPrincipe.png',
        nr: 52,
    },
    {
        country: 'Seychelles',
        capitalName: "Victoria",
        correctAnswers: ["victoria", "viktoria", "wictoria"],
        flagURL: 'img/flags/seychelles.png',
        nr: 53,
    },
    {
        country: 'Republic of the Congo',
        capitalName: "Brazzaville",
        correctAnswers: ["brazzaville", "brazaville", "brazavile", "brassaville"],
        flagURL: 'img/flags/republicOfTheCongo.png',
        nr: 54,
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

const welcomeMsg = document.querySelector('.welcomeMsg');
const hideWelcomeBtn = document.querySelector('.hideWelcomeBtn');

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

function hideWelcomeMsg() {
    welcomeMsg.style.display = 'none'
    //Focus on answerInput
    answerInput.focus();
}

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

    if (questionsArrIndex === 54) {
        //Hide check-btn
        doneBtn.style.display = 'none';


    } else {

        //Hide check-btn
        doneBtn.style.display = 'none';

        //Show next-btn
        nextBtn.style.display = 'inline';
    }
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