angular
  .module("triviaQestion", [])

  //responsible for all function in angularjs
  .controller("triviaCtrl", function($scope, $http) {
    $scope.$watch("questionAmount", function() {
      });
      $scope.$watch("questionCategory", function() {
        $scope.$watch("questionDifficulty", function() {
        });
          $scope.$watch("questionType", function() {
             returnSearch();
          });
    });
    function returnSearch() {
      $http.get("https://opentdb.com/api.php?amount=" + $scope.questionAmount + "&category=" + $scope.questionCategory +"&difficulty=" + $scope.questionDifficulty + "&type=" + $scope.questionType).then(function(p) {
          console.log(p.data.results);
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
  });
