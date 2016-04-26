myapp.controller('dashboardCtl', ['$scope', '$http','$location','$cookies','$cookieStore', function ($scope, $http, $location,$cookies,$cookieStore) {


  var favoriteCookie = $cookieStore.get('Ingeloged');

  $scope.logoutSubmit2 = function(){


      console.log(favoriteCookie);

  };

  if (favoriteCookie != true) {
    $location.path("/");

  }

}]);
