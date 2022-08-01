const quizData = [
    {
        question: "Реки с каким названием нет на территории России?",
        a: "Спина",
        b: "Уста",
        c: "Палец",
        d: "Шея",
        correct: "a",
    },
    {
        question: "Кто был первым военным министром Российской империи?",
        a: "Аракчеев",
        b: "Барклай-де-Толли",
        c: "Вязмитинов",
        d: "Коновницын",
        correct: "c",
    },
    {
        question: "Что Шекспир назвал «вкуснейшим из блюд в земном пиру»?",
        a: "Опьянение",
        b: "Любовь",
        c: "Уединение",
        d: "Сон",
        correct: "d",
    },
    {
        question: "Кто из этих философов в 1864 году написал музыку на стихи А. С. Пушкина «Заклинание» и «Зимний вечер»?",
        a: "Юнг",
        b: "Ницше",
        c: "Шопенгауэр",
        d: "Гегель",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Правельных ответов ${score} из ${quizData.length} вопросов.</h2>
                
                <button onclick="location.reload()">Начать звново</button>
            `;
        }
    }
});
