var validation = angular.module('validation', []);

 // create angular controller
 validation.controller('myCtrl', function($scope) {
    $scope.signUpName = "Sign Up";
    $scope.contactName = "";
    $scope.contactEmail = "";
    $scope.modalShown = false;
    // function to submit the form after all validation has occurred            
    $scope.submitForm = function() {

        // ghcheck to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            
            alert('our form is amazing');
            $scope.signUpName = $scope.userForm.username.$viewValue;
            $scope.contactName = $scope.userForm.username.$viewValue;
            $scope.contactEmail = $scope.userForm.email.$viewValue;
            
        }

    };

});