(function() {

    var app = angular.module("ngApp", ["ngRoute"]);
    app.factory('UserService', function() {
        return {
            oringinRoute : '',
            globalRoot : 'http://cf'
        };
    });

        ////////////////////// ROUTES ///////////////////////
    app.config(function($routeProvider){

        $routeProvider
            .when("/403", {
                templateUrl: "DOM/unauthorized.html",
                controller: "homeController"
            })
            .when("/404", {
                templateUrl: "DOM/404.html",
            })
            .when("/", {
                templateUrl: "DOM/home.html",
                controller: "homeController"
            })
            .when("/history", {
                templateUrl: "DOM/history.html",
                controller: "historyController"
            })
            .when("/fifth", {
                templateUrl: "DOM/fifth.html",
                controller: "fifthController"
            })
            .when("/sixth", {
                templateUrl: "DOM/sixth.html",
                controller: "sixthController"
            })
            .when("/seventh", {
                templateUrl: "DOM/seventh.html",
                controller: "seventhController"
            })

            .when("/eight", {
                templateUrl: "DOM/eight.html",
                controller: "eightController"
            })
            .when("/symptoms", {
                templateUrl: "DOM/symptoms.html",
                controller: "symptomsController"
            })
            .when("/home", {
                // resolve:{
                //     "check":function($location, $http, USER_ID, $route){
                //         $http.get(globalRoot + "/user/roles/staff_admin")
                //             .then(function (response) {
                //                 if(response.data == 1){
                //                 }else{
                //                     $location.path('/403');    //redirect user to 403 page.
                //                 }
                //             });
                //     }
                // },
                templateUrl: "DOM/home.html",
                controller: "homeController"
            })
            .otherwise({redirectTo:"/404"});
    });
    ////////////////////// ROUTES END  ///////////////////////

    ////////////////////// CONTROLLER REFERENCES ///////////////////////
    app.controller("menuController", menuController);
    app.controller("homeController", homeController);
    app.controller("historyController", historyController);
      app.controller("symptomsController", symptomsController);
      app.controller("fifthController", fifthController);
      app.controller("sixthController", sixthController);
      app.controller("seventhController", seventhController);
      app.controller("eightController", seventhController);
	////////////////////// CONTROLLER REFERENCE END ///////////////////////

})();
