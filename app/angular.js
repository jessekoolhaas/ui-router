var myapp = angular.module('myapp',
     [
       "ui.router",
       "angularUtils.directives.dirPagination"]
     );


myapp.controller('allWinkelDatabase', ['$scope', '$http', function ($scope, $http) {
  $scope.winkels = [];
  $scope.loading = true;
  $http.get("app/database/winkel/allewinkels.php")
    .success(function(winkels){
      $scope.winkels = winkels;
      // console.log(winkels);
      // console.log("data goed ontvangen");
      $scope.loading = false;
    })
    .error(function() {
      $scope.data = "error in fetching data";
    });
}]);

myapp.controller('singleWinkelDatabase', function (MyHttpInterceptor, $scope,$stateParams,$http ){
  $scope.currentWinkel = $stateParams.winkel;
  $scope.url   = 'app/database/winkel/winkel.php?user_id='+ $scope.currentWinkel;
  // console.log($scope.currentWinkel);
  $http({
    method: 'GET',
    url: $scope.url
    })
  .success(function(winkelsuitleg){
      $scope.winkelsuitleg = winkelsuitleg;

  })
  .error(function() {
      $scope.winkelsuitleg = "error in fetching data";
  });

});

  myapp.controller('databaseCtl', function ($scope,$stateParams, MyHttpInterceptor ){
    $scope.currentCategoryName = $stateParams.Category;
  });

  myapp.controller('apiTest', ['$scope', '$http', function ($scope, $http) {

  }]);

  myapp.controller('loginCtl', ['$scope', '$http','$location', function ($scope, $http, $location) {

    $scope.loginSubmit = function(){

      var voornaam = $scope.voornaam;
      var wachtwoord = $scope.wachtwoord;

      console.log(voornaam + wachtwoord);
      $scope.url = "https://api-test.4morgen.org/v1/authentication/login";
      $http({
        method: 'POST',
        url: $scope.url,
        data: 'UserName='+ voornaam+'&Password=' + wachtwoord,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })

    };

    $scope.logoutSubmit = function(){
      $scope.url = "https://api-test.4morgen.org/v1/authentication/logoff";
      $http({
        method: 'POST',
        url: $scope.url,
        })
        $location.path("/")
    }

  }]);



    // Intercept http calls.
    myapp.factory('MyHttpInterceptor', function ($q,$location) {
      return {

        // On response success
        response: function (response) {
          console.log(response.status); // Contains the data from the response.
          // Return the response or promise.
          return response || $q.when(response);
        },

        // On response failture
        responseError: function (rejection) {
          console.log(rejection); // Contains the data about the error.
          if (rejection.status === 401) {
            // $location.path('/winkels');
            console.log(rejection.status);
          }

          // Return the promise rejection.
          return $q.reject(rejection);
        }
      };
    });
    myapp.config(function ($provide, $httpProvider) {

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('MyHttpInterceptor');

  });


  /**
 * $http interceptor.
 * On 401 response - it stores the request and broadcasts 'event:loginRequired'.
 */
