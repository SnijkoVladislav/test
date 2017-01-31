(function() {

  'use strict';

  angular
    .module('app')
    .factory('basket', basketFun);

  /** @ngInject */
  function basketFun() {
    var goods = [];

    function addItem(item) {
      goods.push(item);
    };

    function delItem(index) {
      goods.splice(index, 1);
    };

    return {
      addItem: addItem,
      delItem: delItem,
      goods: goods
    };
  }
}());
