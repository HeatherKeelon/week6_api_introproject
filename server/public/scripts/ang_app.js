var myApp = angular.module('myApp', []);

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
    $scope.games=[];
    $scope.query='';


    $scope.findGame=function(){
         var apikey = "9665c6571477e64175e1723de44889b904adffd7";
         var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
        var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
        var query = $scope.query;

        var finalURL = gameSearchURL + '&query=' + encodeURI(query) + '&json_callback=JSON_CALLBACK';

    $http.jsonp(finalURL).then(
        function(response) {
            $scope.games=(response['data'].results);
            console.log($scope.games);
        }
    );
        $scope.games=[];
        $scope.query='';
    };

}]);