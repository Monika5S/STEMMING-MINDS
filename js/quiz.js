// to display quiz questions and options
function displayQuestion() {
  let question_container = document.querySelector("#question");
  let choice_container = document.querySelector(".options");
  question_container.innerHTML = quiz[question_index].question;
  choice_container.innerHTML = "";

  quiz[question_index].choices.forEach((choice) => {
    const choiceItem = document.createElement("p");
    choiceItem.innerHTML = choice;
    choiceItem.addEventListener("click", (event) => {
      checkScore(event.target.innerHTML);
      choiceItem.style.background = "teal";
    });
    choice_container.appendChild(choiceItem);
  });
  nextButton.disabled = true;
  correct_answer.innerHTML = "";
}

// to check answers and update score
function checkScore(choice) {
  let answer = quiz[question_index].answer;
  if (choice === answer) {
    user_score += 1;
    setScore();
  }
  correct_answer.innerHTML = `<strong>Correct Answer is : ${answer}</strong>`;
  nextButton.disabled = false;
}

function setScore() {
  let new_score = document.querySelector("#score");
  new_score.innerHTML = user_score;
}

//to add quiz questions to the quiz object
function handleRequest(response) {
  let quiz_questions = response.data.results;
  quiz_questions.forEach((result) => {
    let options = [];
    result.incorrect_answers.forEach((item) => {
      options.push(item);
    });
    let q_answer = result.correct_answer;
    options.push(q_answer);

    // console.log(quiz_questions, q_answer, options);
    let quiz_data = {
      question: `${result.question}`,
      answer: q_answer,
      choices: options,
    };
    quiz.push(quiz_data);
  });
  displayQuestion();
}

// // to fetch quiz from openTrivia API
function getCategoryQuiz(category) {
  axios
    .get(
      `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=medium&type=multiple`
    )
    .then(handleRequest);
}

// to get the quiz category selected by user
function setTopic(topic_name) {
  let topic = document.querySelector("#topic");
  topic.innerHTML = topic_name;
  if (topic_name === "Mathematics") {
    category = 19;
  } else if (topic_name === "Science & Nature") {
    category = 17;
  } else if (topic_name === "Science & Gadets") {
    category = 30;
  } else {
    category = 18;
  }
  quiz = [];
  user_score = 0;
  setScore();
  getCategoryQuiz(category);
}

let quiz = [];
var correct_answer = document.querySelector("#correct_answer");
var nextButton = document.querySelector(".next-button");
var user_score = 0;
var question_index = 0;
var category = 19;
getCategoryQuiz(category);

nextButton.addEventListener("click", () => {
  if (question_index < quiz.length - 1) {
    question_index++;
    displayQuestion();
  } else {
    alert("🧑‍💻This Quiz is completed. Try new Quiz!!! 🌟");
  }
});
