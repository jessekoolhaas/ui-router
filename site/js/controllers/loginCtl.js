myapp.controller('loginCtl', ['$scope', '$http','$location','$cookies','$cookieStore', function ($scope, $http, $location,$cookies,$cookieStore) {

  $scope.loginError = false;

  $scope.apiLogin   = "https://api-test.4morgen.org/v1/authentication/login";
  $scope.apiLogout  = "https://api-test.4morgen.org/v1/authentication/logoff";

  $scope.loginSubmit = function(){
    var voornaam = $scope.voornaam
    var wachtwoord = $scope.wachtwoord
    console.log(voornaam + wachtwoord);

    $http({
      method: 'POST',
      url: $scope.apiLogin,
      data: 'UserName='+ voornaam+'&Password=' + wachtwoord,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(function successCallback(response) {
            $cookieStore.put('Ingeloged',true);
            $location.path("/dashboard");

          }, function errorCallback(response) {
            $scope.loginError = true;

          });
  };

  $scope.logoutSubmit = function(){
          $cookieStore.remove('Ingeloged');

  };



  $scope.statuslog = function(){
    var favoriteCookie = $cookieStore.get('Ingeloged');
    console.log(favoriteCookie);
  };





}]);
