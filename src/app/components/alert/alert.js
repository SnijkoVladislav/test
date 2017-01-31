(function() {

  'use strict';

  angular
    .module('app')
    .component('serviceWhaleAlert', {
      templateUrl: 'app/components/alert/alert.html',
      controller: ratingController,
    });

  /** @ngInject */
  function ratingController($scope, alert) {
    var vm = this;

    vm.alert = alert;
  }
}());
