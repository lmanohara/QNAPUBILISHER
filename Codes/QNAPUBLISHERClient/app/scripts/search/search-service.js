searchModule.factory('searchService', ['$resource',
    function ($resource) {


        var searchResult = 'http://localhost/QNAPUBLISHERService/index.php/search/resource/all/term/:term';

        return {
            getSearchResult: function () {
                return $resource(searchResult, {}, {
                    query: {
                        method: 'GET',
                        isArray: true,
                        params: {
                            term: '@term'
                        }
                    }
                });
            }
        };

    }]);