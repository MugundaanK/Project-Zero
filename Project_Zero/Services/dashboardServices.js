app.service('dashboardServices', ['$http', function($http){
    var myurl = 'https://dummyjson.com/products';
    this.getdashboardData = function(cb){
        $http(
            {
                method:'GET',
                url:myurl
            }
        ).then(function(response){
            console.log(response);
            cb(response.data.products);
        
        },function(e){
            console.log(e);
        });
    }
}]);
