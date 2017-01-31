(function() {

  'use strict';

  angular
    .module('app')
    .component('serviceWhaleBasket', {
      templateUrl: 'app/components/basket/basket.html',
      controller: ratingController,
    });

  /** @ngInject */
  function ratingController($scope, basket) {
    var vm = this;

    vm.basket = basket;
  }
}());
