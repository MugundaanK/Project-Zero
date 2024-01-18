var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    .when('/home',{
        templateUrl:'../Pages/navigationPage.html',

    }).when('/register',{
        templateUrl:'../Pages/registerPage.html',
        controller:'postDatacontrol'
        
    }).when('/login',{
        templateUrl:'../Pages/loginPage.html',
        controller:'getDatacontrol'

    }).when('/dashboard',{
        templateUrl:'../Pages/dashboardPage.html',
        controller:'getDashdatacontrol'

    }).when('/about',{
        templateUrl:'../Pages/aboutPage.html',

    }).otherwise({
        redirectTo:"/home"
     })

});