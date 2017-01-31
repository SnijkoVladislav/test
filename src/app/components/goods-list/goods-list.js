(function() {

  'use strict';

  angular
    .module('app')
    .component('serviceWhaleCartList', {
      templateUrl: 'app/components/goods-list/goods-list.html',
      controller: cartListController,
      bindings: {
        items: '='
      }
    });

  /** @ngInject */
  function cartListController(basket) {
    var vm = this;

    vm.addItemToBasket = basket.addItem;
  }
}());
