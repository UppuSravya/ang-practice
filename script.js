
angular.module("myModule", [])
    .controller("myController", ['$scope', function ($scope) {
    
        $scope.icons = ["1", "2", "3"];
        $scope.icons2 = ["4", "5", "6"];
        $scope.icons3 = ["7", "8", "9"];
        $scope.operators = ["+", "-", "*", "/"];

        $scope.disp1 = function(n) {
            $scope.res1 = $scope.n;
        }
        $scope.disp2 = function(m) {
            $scope.res2 = $scope.m;
        }
        $scope.disp3 = function(p) {
            $scope.res3 = $scope.p;

        }

            $scope.cal = function (operator) {
                if (operator === "+") {
                    $scope.result = $scope.res1 + $scope.res2;
                } else if (operator === "-") {
                    $scope.result = $scope.a - $scope.b;
                } else if (operator === "*") {
                    $scope.result = $scope.a * $scope.b;
                } else if (operator === "/") {
                    $scope.result = $scope.a / $scope.b;
                }
            }

        }]);