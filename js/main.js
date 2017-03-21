var app = angular.module('office',['ng.shims.placeholder','jcs-autoValidate']); /*might need to downgrade to some lower version of angular*/

app.controller('MainController',function($scope){

    $scope.onSubmit = function(valid){
        if(valid)
            {
                console.log("It has been submitted");
            } else{
                console.log("Invalid form !");
            }
    }
});
