(function() {

  'use strict';

  angular
    .module('app')
    .component('login', {
      templateUrl: 'app/pages/login/login.html',
      controller: loginController
    });

  /** @ngInject */
  function loginController($window, $scope, $rootScope, alert, $location, login) {
    var vm = this;

    vm.loginSubmit = function() {
      if (login.checkUser(vm.username, vm.password)) {
        alert.addAlert({
          type: 'success',
          msg: 'login successfully'
        });
        $location.path('/search');
      } else {
        alert.addAlert({
          type: 'danger',
          msg: 'login or password not valid'
        });
      }
    }

  }
}());
