function AppCtrl($scope) {
  $scope.currentNavItem = 'Quiz';
}

angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller("QuizCtrl", function($scope, $http) {

    $scope.$watch("amount", function() {
      });
      $scope.$watch("category", function() {
        $scope.$watch("difficulty", function() {
        });
          $scope.$watch("type", function() {
             returnSearch();
          });
    });

    function returnSearch() {
      $http.get("https://opentdb.com/api.php?amount=" + $scope.amount + "&category=" + $scope.category +"&difficulty=" + $scope.difficulty + "&type=" + $scope.type).then(function(p) {
          console.log(p.data);
          //regular expression converter
          // $scope.triviaQestion = p.data.results;
          let array = p.data.results;
          array.forEach(function(item) {
            item.question = item.question.replace(/\&.{4}\;/g, "'");
           item.question = item.question.replace(/\&.{5}\;/g, '"');
           item.question = item.question.replace(`&#039;/g`, '');
           item.incorrect_answers[0] = item.incorrect_answers[0].replace(/&rsquo;/g, '-');
           item.incorrect_answers[1] = item.incorrect_answers[1].replace(/&rsquo;/g, '-');
           item.incorrect_answers[2] = item.incorrect_answers[2].replace(/&rsquo;/g, '-');
          });
          $scope.trivias = array;
          //end of regular expression converter
        });
    }
  });
