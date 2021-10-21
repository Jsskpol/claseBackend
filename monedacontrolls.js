var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.peso= "peso";
    $scope.dolar = "dolar";
    $scope.fullName = function() {
        return $scope.peso/$scope.dolar;
    };
});