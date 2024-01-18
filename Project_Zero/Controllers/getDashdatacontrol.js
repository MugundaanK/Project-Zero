app.controller('getDashdatacontrol', ['$scope','$location','dashboardServices', function($scope,$location,dashboardServices){
    $scope.dashdata;
    $scope.emailid = localStorage.getItem("useremail");

    if($scope.emailid != null){
        console.log($scope.emailid);
        $scope.data = dashboardServices.getdashboardData(function(data){
            $scope.dashdata = data;
            console.log($scope.dashdata);
        })
    }
    else{
        $location.path('/home');
    }
    
    
    $scope.sortbylow = () => {
        $scope.value = 'price';
    }

    $scope.sortbyhigh = () => {
        $scope.value = '-price';
    }

    $scope.logout = () =>{
        console.log('hi');
        localStorage.clear();
        $location.path('#/home');
    }


}]) 