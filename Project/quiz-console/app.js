var Question = function (question, answers = [], answer) {
    this.question = question;
    this.answers = answers;
    this.answer = answer;
}

var score = 0
Question.prototype.check_answer = function (reponse) {
    return () => {
        if (reponse == this.answer) {
            console.log("You're right");
            score++
        } else {
            console.log("Wrong response ");
        }
        return score
    }

}
Question.prototype.display = function () {
    console.log(this.question)
    for (let i = 0; i < this.answers.length; i++) {
        console.log(i + " ) " + this.answers[i])
    }
}
var printQuestion = function (array_question) {
    let len = array_question.length
    console.log('len :', len);
    let q = Math.floor(len * Math.random() + 1) - 1
    let question = array_question[q]
    question.display()
    let response = prompt("Enter the valide response")
    let score = question.check_answer(response)
    console.log("Current score : ", score())
    console.log('--------------------ok-------------------\n');
    if (response !== 'exit') {
        printQuestion(questions)
    }
}

const questions = []
const q1 = new Question('who is the president ? ', ['macky', 'wade', 'senghor'], 0)
const q2 = new Question('who is the first minister ?', ['booum', 'boun', 'idy'], 1)
const q3 = new Question('What is the best programming language ?', ['js', 'python', 'go'], 0)
const q4 = new Question('What is programming ?', ['fun', 'easy', 'difficult'], 0)
questions.push(q1, q2, q3, q4)

printQuestion(questions)