(function () {

    angular.module('myFirstApp', [])
    .controller('myFirstController', function ($scope) {

        $scope.name = "Abhishek";
        $scope.sayHello = function () {
            return "Hello world";
        }

    });

})();