var app = angular.module('office',['ng.shims.placeholder',
                                   'jcs-autoValidate']); /*might need to downgrade to some lower version of angular*/

app.controller('MainController',function($scope, $http){
    $scope.onSubmit = function(valid){
        if(valid)
            {
                console.log("It has been submitted");
            } else{
                console.log("Invalid form !");
            }
    }
	
	$http.get('http://localhost/front-end-project/data.json').then(function success(response) {
    	$scope.content = response.data;
		console.log($scope.content);
  }, function error(response) {
 		console.log('something bad happened',response);
  })
});
