myapp.config(function($stateProvider, $urlRouterProvider,$locationProvider){



  $stateProvider
      .state('home', {
          url: "/",
          templateUrl: "site/frontpage.html"
      })
      .state ('charities',{
        url:"/charities",
        templateUrl:"site/charities.html",
        controller: 'LocalDatabaseMyTable'
      })

      .state ('winkels', {
          url: "/winkels",
          templateUrl:"site/winkels.html",
          controller: 'LocalDatabaseWinkels'
        })
        .state ('winkel-display', {
            url: "/winkel-display/:winkel",
            templateUrl:"site/winkel-display.html",
            controller: 'winkelDatabaseCtl'
          })
            $locationProvider.html5Mode(true);

});
