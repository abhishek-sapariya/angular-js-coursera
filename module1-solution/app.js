(function () {

    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
    
    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {

        $scope.menuString = "";
        $scope.resultString = "";

        $scope.check = function () {
            if($scope.menuString.length > 0){
                var items = $scope.menuString.split(",");
                $scope.resultString = checkCount(items);
            }
            else{
                $scope.resultString = "Please enter data first";
            }
        };

        function checkCount(items){
            if(items.length <= 3){
                return "Enjoy!";
            }
            else{
                return "Too much!";
            }
        }

    }
    
})();