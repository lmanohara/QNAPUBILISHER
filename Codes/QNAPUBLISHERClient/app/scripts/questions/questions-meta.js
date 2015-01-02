if (app.meta === undefined) {

    app.meta = {};

}

var questionsModule = angular.module('questionsModule', []).config(function () {

    app.meta.questions = {};
    app.meta.askQuestion = {};
    app.meta.question = {};

    app.meta.askQuestion.rootRoute = '/questions/ask';
    app.meta.askQuestion.templateUrl = 'scripts/questions/ask-question-view.html';
    app.meta.askQuestion.controller = 'questionsController';

    app.meta.questions.rootRoute = '/questions';
    app.meta.questions.templateUrl = 'scripts/questions/questions-view.html';
    app.meta.questions.controller = 'questionsController';

    app.meta.question.path = '/questions/id/';
    app.meta.question.rootRoute = app.meta.question.path + ':id';
    app.meta.question.templateUrl = 'scripts/questions/question-view.html';
    app.meta.question.controller = 'questionsController';


});