
myapp.config(['$urlRouterProvider', '$stateProvider','$locationProvider','$httpProvider', function($urlRouterProvider, $stateProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider

  .state('home', {
      url: "/",
      templateUrl: "/site/frontpage.html"
  })
  .state ('winkels', {
      url: "/winkels",
      templateUrl:"/site/winkels.html",
      controller: 'allWinkelDatabase'
    })
    .state ('winkel-display', {
        url: "/winkel-display/:winkel",
        templateUrl:"/site/winkel-display.html",
        controller: 'singleWinkelDatabase'
      })
      .state ('api', {
          url: "/api",
          templateUrl:"/site/api.html",
          controller: 'apiTest'
        })
        .state ('login', {
            url: "/login",
            templateUrl:"/site/login.html"
          })
        .state ('dashboard', {
          url: "/dashboard",
          templateUrl:"/site/dashboard.html"
        })



}]);
