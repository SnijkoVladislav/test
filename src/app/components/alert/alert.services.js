(function() {

  'use strict';

  angular
    .module('app')
    .factory('alert', alertFun);

  /** @ngInject */
  function alertFun() {
    var list = [];

    function addAlert(item) {
      list.push(item);
    };

    function closeAlert(index) {
      list.splice(index, 1);
    }

    return {
      addAlert: addAlert,
      closeAlert: closeAlert,
      list: list
    };
  }
}());
