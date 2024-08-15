// script.js
function evaluateAnswers() {
    let answers = [
        {id: 'answer1', correct: ["no", "no hay forma", "nada nos separa"], feedbackId: "feedback1", feedback: "Correcto, nada puede separarnos del amor de Dios."},
        {id: 'answer2', correct: ["vida eterna", "salvación"], feedbackId: "feedback2", feedback: "Correcto, Jesús nos ofrece vida eterna."},
        {id: 'answer3', correct: ["jesús", "cristo"], feedbackId: "feedback3", feedback: "Correcto, es Jesús quien nos da la vida eterna."},
        {id: 'answer4', correct: ["no", "es eterna"], feedbackId: "feedback4", feedback: "Correcto, lo eterno no tiene fin."},
        {id: 'answer5', correct: ["no", "nadie puede"], feedbackId: "feedback5", feedback: "Correcto, nadie puede arrebatarnos de la mano de Cristo."},
        {id: 'answer6', correct: ["no", "nadie puede"], feedbackId: "feedback6", feedback: "Correcto, nadie puede arrebatarnos de la mano de nuestro Padre."},
        {id: 'answer7', correct: ["selló", "el espíritu santo nos selló"], feedbackId: "feedback7", feedback: "Correcto, Dios nos selló con su Espíritu Santo."},
        {id: 'answer8', correct: ["al creer", "cuando creímos"], feedbackId: "feedback8", feedback: "Correcto, fuimos sellados al creer en Jesús."},
        {id: 'answer9', correct: ["sí", "si tengo vida eterna"], feedbackId: "feedback9", feedback: "Correcto, si tienes a Cristo, tienes vida eterna."},
        {id: 'answer10', correct: ["si tienes a cristo", "porque tengo a cristo"], feedbackId: "feedback10", feedback: "Correcto, la vida eterna es tener a Cristo."},
        {id: 'answer11', correct: ["porque soy salvo", "no debo pecar"], feedbackId: "feedback11", feedback: "Correcto, no debemos jugar con el pecado ahora que somos salvos."},
        {id: 'answer12', correct: ["porque me ama", "porque dios me ama"], feedbackId: "feedback12", feedback: "Correcto, Dios nos disciplina porque nos ama."},
        {id: 'answer13', correct: ["para nuestro bien", "para nuestra santidad", "para que seamos santos"], feedbackId: "feedback13", feedback: "Correcto, Dios nos disciplina para nuestro bien y santidad."}
    ];

    answers.forEach(question => {
        let userAnswer = document.getElementById(question.id).value.toLowerCase();
        let matched = question.correct.some(answer => userAnswer.includes(answer));
        let feedbackElement = document.getElementById(question.feedbackId);
        if (matched) {
            feedbackElement.innerHTML = question.feedback;
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.innerHTML = "Respuesta incorrecta. Revisa el versículo.";
            feedbackElement.style.color = "red";
        }
    });
}
