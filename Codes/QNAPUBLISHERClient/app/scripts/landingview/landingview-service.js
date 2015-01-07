landingViewModule.factory('landingViewService', ['$resource',
    function ($resource) {

        var getQuestionList = 'http://localhost/QNAPUBLISHERService/index.php/question/resource/list';

        return {
            getQuestionList: function () {
                return $resource(getQuestionList, {}, {
                    query: {
                        method: 'GET',
                        isArray: true
                    }
                });
            }
        };

    }]);