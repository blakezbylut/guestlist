angular
  .module("RailsApp", [])
  .controller("GuestController", ['$scope', '$http', function($scope, $http){

    $scope.reverse = true;

    $http.get('/api/guests').then(function(response){
      $scope.guests = response.data.guests;
      console.log("done");
    })

    $scope.addGuest = function(){

      var newGuest = {
        guest: {
          name: $scope.newGuest.name,
          email: $scope.newGuest.email,
          guestcount: $scope.newGuest.guestcount
        }
      }

      $http.post('/api/guests', newGuest).then(function(response){
        $scope.guests.push(response.data.new_guest);
      })
    }

    $scope.deleteGuest = function(guest){
      var id = guest.id;
      $http.delete('/api/guests/'+id).then(function(response){
        $scope.guests = $scope.guests.filter(function(f){
          return f.id != guest.id;
        })
      })
    }

  }])
