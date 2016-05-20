angular
  .module("RailsApp", [])
  .controller("GuestController", ['$scope', '$http', function($scope, $http){

    $http.get('/api/guests').then(function(response){
      $scope.guests = response.data.guests;
      console.log("done");
    })

    $scope.newGuest = {
                      name: '',
                      email: '',
                      guestcount: 0
                    }

    function addGuest(){
      $scope.guests.push({
        name:
      })
    }

  }])
