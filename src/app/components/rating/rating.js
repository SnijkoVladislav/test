(function() {

  'use strict';

  angular
    .module('app')
    .component('serviceWhaleRating', {
      templateUrl: 'app/components/rating/rating.html',
      controller: ratingController,
      bindings: {
        ratingValue: '='
      }
    });

  /** @ngInject */
  function ratingController($scope) {
    var vm = this;

    vm.toggle = function(index) {
      vm.ratingValue = index + 1;
    };

    $scope.$watch('$ctrl.ratingValue', function(oldValue, newValue) {
      if (newValue) {
        vm.stars = [];
        for (var i = 0; i < 5; i++) {
          vm.stars.push({
            filled: i < vm.ratingValue
          });
        }
      }
    });
  }
}());
