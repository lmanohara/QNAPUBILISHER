searchModule.factory('searchFactory', ['$route', 'searchService',
    function ($route, searchService) {
        var search = {};
        var question = {
            'answerCount': 4,
            'title': 'How to create angular application?',
            'tags': [{
                id: 1,
                name: 'angular'
            }, {
                id: 2,
                name: 'javascript'
            }],
            'user': 'lahiru manohara'
        };


        function getQuestionsList() {
            var questions = [];
            var searchTerm = $route.current.params.q;
            var searchResult = searchService.getSearchResult();
            searchResult.query({}, {
                term: searchTerm
            }).$promise.then(function (response) {
                angular.forEach(response, function (object) {
                    this.push(object);
                }, questions);
            }, function (error) {
                //console.log(error);
            });
            //console.log(questions);
            return questions;
        }

        return {
            init: function () {
                search.questions = getQuestionsList();
                return search;
            }
        };

    }]);