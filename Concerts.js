
var app = angular.module('app',[]);

app.controller('main', ['$http', '$scope', function($http, $scope){
    $scope.data;

$http.get('http://apis.is/concerts').
  then(function(response) {
  
  $scope.concerts = response.data.results;
  }, function(response) {
   $scope.data = response;
});
  }]);