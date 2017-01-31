(function() {

  'use strict';

  angular
    .module('app')
    .component('search', {
      templateUrl: 'app/pages/search/search.html',
      controller: searchController
    });

  function searchController($scope, $http) {
    var vm = this;

    $http.get("test/data.json")
      .then(function(response) {
        vm.goods = response.data;
      });
  }
}());
