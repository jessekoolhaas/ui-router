myapp.controller('databaseController', ['$scope', '$http', function ($scope, $http) {
    $scope.data = [];

    $http.get("https://api-test.4morgen.org/v1/ambassadors")
    .success(function(data){
        $scope.data = data;
        console.log(data);
        console.log("data goed ontvangen");
    })
    .error(function() {
        $scope.data = "error in fetching data";
    });
    }]);



myapp.controller('LocalDatabaseWinkels', ['$scope', '$http', function ($scope, $http) {
        $scope.winkels = [];

        $http.get("app/selects.php")
        .success(function(winkels){
            $scope.winkels = winkels;
            console.log(winkels);
            console.log("data goed ontvangen");
        })
        .error(function() {
            $scope.data = "error in fetching data";
        });
        }]);
