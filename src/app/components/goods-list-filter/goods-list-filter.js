(function() {

  'use strict';

  angular
    .module('app')
    .component('serviceWhaleCartListFilter', {
      templateUrl: 'app/components/goods-list-filter/goods-list-filter.html',
      controller: cartListFilterController,
      bindings: {
        filterList: '=',
        list: '='
      }
    });

  /** @ngInject */
  function cartListFilterController($scope) {
    var vm = this;

    vm.models = {
      dataFrom: '',
      dataTo: '',
      inStock: false,
      priceFrom: '',
      priceTo: '',
      color: 'any color'
    };

    vm.filters = {
      inStock: function(item) {
        return vm.models.inStock ? item.inStock : true;
      },
      dataFrom: function(item) {
        return (vm.models.dataFrom.valueOf() - 86400000) < new Date(item.data).valueOf();
      },
      dataTo: function(item) {
        return (vm.models.dataTo.valueOf() - 86400000) > new Date(item.data).valueOf();
      },
      priceFrom: function(item) {
        return item.price > vm.models.priceFrom;
      },
      priceTo: function(item) {
        return item.price < vm.models.priceTo;
      },
      color: function(item) {
        return vm.models.color === 'any color' ? true : item.color === vm.models.color;
      }
    };

    $scope.$on('inputModified.formChanged', function() {
      vm.filterList = vm.list;
      Object.keys(vm.models).forEach(function(item) {
        if (vm.models[item]) {
          vm.filterList = vm.filterList.filter(vm.filters[item]);
        }
      });
    });

    vm.colors = [
      "any color", "brown", "blue", "green"
    ];

    vm.colorsChange = function(name) {
      vm.models.color = name;
      vm.filterForm.color.$setPristine();
    }

    vm.dataFromOpen = function() {
      vm.dataFrom.opened = true;
    };

    vm.dataToOpen = function() {
      vm.dataTo.opened = true;
    };

    vm.dataFrom = {
      opened: false
    };

    vm.dataTo = {
      opened: false
    };
  }
}());
