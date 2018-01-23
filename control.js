var app = angular.module('myApp',[]);



// MY CONTROLLER
app.controller('myCtrl', ['$scope', function($scope) {

  var vm = this;

   $scope.links = [
        {
            "name" : "Basic",
            "link" : "https://docs.google.com/document/d/13xD6VSVuFKFhTibTlRAPZLWMNq8n_ATPK8dsNb4-Slc/edit"
        }

    ]

}]);
