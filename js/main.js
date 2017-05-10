function AppCtrl($scope) {
  $scope.currentNavItem = 'Quiz';
}

angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

  .controller("QuizCtrl", function($scope, $http) {

      $scope.$watch("type", function() {
        returnSearch();
      });


    function returnSearch() {
      $http.get("https://opentdb.com/api.php?amount=" + $scope.amount + "&category=" + $scope.category + "&difficulty=" + $scope.difficulty + "&type=" + $scope.type).then(function(p) {
        console.log(p.data.response_code);
        //regular expression converter
        let array = p.data.results;
        array.forEach(function(item) {
          item.question = item.question.replace(/\&.{4}\;/g, "'");
          item.question = item.question.replace(/\&.{5}\;/g, '"');
          item.question = item.question.replace(`&#039;/g`, '');
        });
        $scope.trivias = array;
        //end of regular expression converter
      });
    }


  })

  .controller("AboutCtrl", function($scope) {
    $scope.title = 'ABOUT PAGE'
  });


//   function TimeCtrl($scope, $timeout) {
//     $scope.clock = "loading clock..."; // initialise the time variable
//     $scope.tickInterval = 1000 //ms
//
//     var tick = function() {
//         $scope.clock = Date.now() // get the current time
//         $timeout(tick, $scope.tickInterval); // reset the timer
//     }
//
//     // Start the timer
//     $timeout(tick, $scope.tickInterval);
// }
