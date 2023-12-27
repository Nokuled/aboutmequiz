// JavaScript for the quiz functionality
const startQuizBtn = document.getElementById('start-quiz');
const introContainer = document.querySelector('.intro-container');
const quizContainer = document.querySelector('.quiz-container');

startQuizBtn.addEventListener('click', function() {
    introContainer.style.display = 'none'; // Hide the intro container
    quizContainer.style.display = 'block'; // Show the quiz container
});
const form = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const answers = new FormData(this);
    
    let score = 0; // Initialize the score
    
    // Calculate score based on the answers
    if (answers.get('q1') === 'trans people do not own cars') {
        score++;
    }
    if (answers.get('q2') === 'dragon ball z') {
        score++;
    }
	if (answers.get('q3') === 'blue and black') {
        score++;
    }
	if (answers.get('q4') === 'taking a shower') {
        score++;
    }
	if (answers.get('q5') === 'blue') {
        score++;
    }
	if (answers.get('q6') === 'mathmatician') {
        score++;
    }
	if (answers.get('q7') === 'smoking') {
        score++;
    }
	if (answers.get('q8') === 'ballads 1 - joji') {
        score++;
    }
	if (answers.get('q9') === 'basketball') {
        score++;
    }
	if (answers.get('q10') === 'going to work') {
        score++;
    }
    // Add more conditions for other questions...

    // Display the final result based on the score
    let result = '';
    if (score === 0) {
        result = "get the fuck outta here. fuckin loser";
    } else if (score <= 5) {
        result = `fuck you shit head. you got ${score}/10, u will never truly know me.`;
    } else {
        result = `quit looking at your screen like that u fucking nut sack. this score dont mean shit ${score}/10.`;
    }

    resultDiv.innerHTML = `<p>${result}</p>`;
});