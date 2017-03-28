var app = angular.module('office',['ng.shims.placeholder',
                                   'jcs-autoValidate']);

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

     $scope.small = true;
     $scope.showbuttons = function(){
     $scope.small = !$scope.small;      
     }
    /* show login */
     $scope.checked = true;
     $scope.showlogin = function(){
     $scope.checked = !$scope.checked;      
     }
    
    /* big button */
    var toggle1 = true;
    var toggle2 = true;
    var toggle3 = true;
    var toggle4 = true;
    $scope.big_button_action = function(button_number){
        console.log("You clicked a big button ! ", button_number);
        if(button_number == 1)
        {
            if(toggle1 == true)
                {
            $scope.myStyle1={'background-color':'black'};
            var row = document.querySelector('.hidden-text-container');
            row.style.display = 'block';
            var cell = document.querySelector('.hidden-text-left');
            cell.style.visibility = 'visible';
                }
            else
                {
            $scope.myStyle1={'background-color':'#53b8c4'};
            var row = document.querySelector('.hidden-text-container');
            row.style.display = 'none';
            var cell = document.querySelector('.hidden-text-left');
            cell.style.visibility = 'hidden';
                }
            toggle1 = !toggle1;
        } else
        if(button_number == 2){
            if(toggle2 == true)
                {
            $scope.myStyle2={'background-color':'black'};
            var row = document.querySelector('.hidden-text-container');
            row.style.display = 'block';
            var cell = document.querySelector('.hidden-text-right');
            cell.style.visibility = 'visible';
                }
            else
                {
            $scope.myStyle2={'background-color':'#53b8c4'};
            var row = document.querySelector('.hidden-text-container');
            row.style.display = 'none';
            var cell = document.querySelector('.hidden-text-right');
            cell.style.visibility = 'hidden';
                }
            toggle2 = !toggle2;
        }
        else
        if(button_number == 3){
                       if(toggle3 == true)
                {
            $scope.myStyle3={'background-color':'black'};
            var row = document.querySelector('.hidden-text-container-low');
            row.style.display = 'block';
            var cell = document.querySelector('.hidden-text-left-low');
            cell.style.visibility = 'visible';
                }
            else
                {
            $scope.myStyle3={'background-color':'#53b8c4'};
            var row = document.querySelector('.hidden-text-container-low');
            row.style.display = 'none';
            var cell = document.querySelector('.hidden-text-left-low');
            cell.style.visibility = 'hidden';
                }
            toggle3 = !toggle3; 
        }
        else
        {
                       if(toggle4 == true)
                {
            $scope.myStyle4={'background-color':'black'};
            var row = document.querySelector('.hidden-text-container-low');
            row.style.display = 'block';
            var cell = document.querySelector('.hidden-text-right-low');
            cell.style.visibility = 'visible';
                }
            else
                {
            $scope.myStyle4={'background-color':'#53b8c4'};
            var row = document.querySelector('.hidden-text-container-low');
            row.style.display = 'none';
            var cell = document.querySelector('.hidden-text-right-low');
            cell.style.visibility = 'hidden';  
                }
            toggle4 = !toggle4; 
        }

    }
});

var slideIndex = 1;
showDivsFirstRun(slideIndex, 'office1','floor1');
showDivsFirstRun(slideIndex, 'office-pic1','floor-pic1');

function plusDivs(n,type,pic1, pic2) {
console.log(pic1, pic2);
  showDivs(slideIndex += n, type,pic1, pic2);
}

function showDivs(n, type ,pic1, pic2) {
  var i, first_run = true,copy;
  var x = [];
  x.push(document.getElementsByClassName(pic1));
  x.push(document.getElementsByClassName(pic2));
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

function showDivsFirstRun(n, pic1, pic2) {
  var i, first_run = true;
  var x = [];
  x.push(document.getElementsByClassName(pic1));
  x.push(document.getElementsByClassName(pic2));
  for (i = 0; i < x.length; i++) {
    x[i][0].style.display = "none";
  }
  x[slideIndex-1][0].style.display = "block";
}