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
		console.log($scope.content.text);
  }, function error(response) {
 		console.log('something bad happened',response);
  })
});

var slideIndex = 1;
showDivsFirstRun(slideIndex);

function plusDivs(n,type) {
  showDivs(slideIndex += n, type);
}

function showDivs(n, type) {
  var i, first_run = true,copy;
  var x = [];
  x.push(document.getElementsByClassName("office1"));
  x.push(document.getElementsByClassName("floor1"));
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i][0].style.display = "none";
  }
  x[slideIndex-1][0].style.display = "block";
    if(type == 'left')
    {
        x[slideIndex-1][0].className = x[slideIndex-1][0].className.substring(0, x[slideIndex-1][0].className .indexOf('1')) + "1 w3-animate-left";
    }
    else
    {
        x[slideIndex-1][0].className = x[slideIndex-1][0].className.substring(0, x[slideIndex-1][0].className .indexOf('1')) + "1 w3-animate-right";
    }
}

function showDivsFirstRun(n) {
  var i, first_run = true;
  var x = [];
  x.push(document.getElementsByClassName("office1"));
  x.push(document.getElementsByClassName("floor1"));
  for (i = 0; i < x.length; i++) {
    x[i][0].style.display = "none";
  }
  x[slideIndex-1][0].style.display = "block";
}