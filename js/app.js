angular.module('GiphyApp', [])

    .run(function() {
        console.log('App has loaded!');
    })

    .controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.searchTerm = '';

        $scope.search = function() {
            var request = {
                url: '',
                method: 'GET',
                params: {
                    q: $scope.searchTerm
                }
            }
            $http(request).then(function success(response) {
                console.log(response);
            }, function error(response) {
                console.log(response);
            });
        };



    }]);
