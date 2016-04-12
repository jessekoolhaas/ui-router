myapp.config(['$urlRouterProvider', '$stateProvider','$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider

  .state('home', {
      url: "/",
      templateUrl: "/site/frontpage.html"
  })
  .state ('winkels', {
      url: "/test/winkels",
      templateUrl:"/site/winkels.html",
      controller: 'allWinkelDatabase'
    })
    .state ('winkel-display', {
        url: "/winkel-display/:winkel",
        templateUrl:"/site/winkel-display.html",
        controller: 'singleWinkelDatabase'
      })
      .state ('wel', {
        url:"/wel",
        templateUrl: "/site/wel.html"
      })
      .state ('niet', {
        url:"/test/niet",
        templateUrl: "/site/niet.html"
      });

}]);
