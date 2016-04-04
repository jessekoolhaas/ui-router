myapp.config(function($stateProvider, $urlRouterProvider,$locationProvider){
  $stateProvider

    .state('route1', {
        url: "/route1",
        templateUrl: "route1.html"
    })
    .state('new-qs', {
        url: '/new/:Category',
        templateUrl: 'new.html',
        controller: 'databaseCtl'
    })
      .state('route1.list', {
          url: "/list",
          templateUrl: "route1.list.html",
          controller: function($scope){
            $scope.items = ["A", "List", "Of", "Items"];
          }
      })
      .state('categorie', {
          url: "/categorie",
          templateUrl: "categorie.html",
          controller: 'databaseController'
      })

    .state('route2', {
        url: "/route2",
        templateUrl: "route2.html"
    })
      .state('route2.list', {
          url: "/list",
          templateUrl: "route2.list.html",
          controller: function($scope){
            $scope.things = ["A", "Set", "Of", "Things"];
          }
      })
      .state('home', {
          url: "/home",
          templateUrl: "route1.html"

      })
      .state ('winkels', {
          url: "/winkels",
          templateUrl:"winkels.html",
          controller: 'LocalDatabaseWinkels'
        })
        .state ('winkel-display', {
            url: "/winkel/:winkel",
            templateUrl:"winkel-display.html",
            controller: 'winkelDatabaseCtl'
          })

});


myapp.controller('winkelDatabaseCtl', function ($scope,$stateParams ){
  $scope.currentWinkel = $stateParams.winkel;

  console.log($scope.currentWinkel);
});

  myapp.controller('databaseCtl', function ($scope,$stateParams ){
    $scope.currentCategoryName = $stateParams.Category;

    console.log($scope.currentCategoryName);
  });
