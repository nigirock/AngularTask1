var app = angular.module("Task1App",[]);
app.controller("mainCtrl", function($scope,$sce){
   $scope.trustSrc = function(link){
      return $sce.trustAsResourceUrl(link);
   };
   $scope.data = model;
});
