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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = [];
  x.push(document.getElementsByClassName("office"));
  x.push(document.getElementsByClassName("floor"));
  console.log(x);
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i][0].style.display = "none";  
  }
  x[slideIndex-1][0].style.display = "block";  
}
