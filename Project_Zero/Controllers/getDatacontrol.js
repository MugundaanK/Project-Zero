app.controller('getDatacontrol', ['$scope', 'userServices', '$location', function($scope, userServices, $location){
    $scope.userdataarr;
    $scope.loginCheck = () => {
        console.log('getDatacontrol');
        $scope.data = userServices.getuserData(function(data){
            $scope.userdataarr = data;
            var state = true;

            for(let i of data){
                if(($scope.email == i.email) && ($scope.password == i.password)){
                    alert('Login Success')
                    localStorage.setItem('useremail', $scope.email);
                    $location.path('/dashboard');
                    state = false;
                }
            }
            if(state){
                alert('Invalid User Credentials');
            }
        });
    }
    $scope.showPassword = false;

    $scope.passwordVisibility = function() {
        // console.log('showpassword');
        $scope.showPassword = !$scope.showPassword;
    }

}]);