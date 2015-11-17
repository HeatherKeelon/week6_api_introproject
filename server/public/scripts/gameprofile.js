myApp.directive('gameProfile',
    function() {
        return {
            restrict: "E",
            scope: {
                info: "="
            },
            templateUrl: "views/gamesprofile.html"
        }

    });