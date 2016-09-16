angular.module('GiphyApp', [])

    .controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.searchTerm = '';
        $scope.gifArray = [];

        $scope.search = function() {
            var request = {
                url: 'http://api.giphy.com/v1/gifs/search?',
                method: 'GET',
                params: {
                    q: $scope.searchTerm,
                    api_key: 'dc6zaTOxFJmzC'
                }
            }
            $http(request).then(function success(response) {
                $scope.gifArray = response.data.data;
                console.log(response.data.data);
            }, function error(response) {
                console.log(response);
            });
        };



    }])
    .run(function() {
        console.log('App has loaded!');
    });
