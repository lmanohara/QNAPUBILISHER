if (app.meta === undefined) {

    app.meta = {};

}

var questionsModule = angular.module('questionsModule', []).config(function () {

    app.meta.questions = {};
    app.meta.questions.askQuestion = {};
    
    app.meta.questions.askQuestion.rootRoute = '/questions/ask';
    app.meta.questions.askQuestion.templateUrl = 'scripts/questions/ask-question-view.html';
    app.meta.questions.askQuestion.controller = 'questionsController';
    
    app.meta.questions.rootRoute = '/questions';
    app.meta.questions.templateUrl = 'scripts/questions/questions-view.html';
    app.meta.questions.controller = 'questionsController';
    

});