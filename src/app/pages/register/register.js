(function() {

  'use strict';

  angular
    .module('app')
    .component('register', {
      templateUrl: 'app/pages/register/register.html',
      controller: registerController
    });

  /** @ngInject */
  function registerController(alert, $rootScope, $window, login) {
    var vm = this;

    vm.registerSubmit = function() {
      if (vm.register.$invalid) {
        alert.addAlert({
          type: 'danger',
          msg: 'Form not valid'
        });
      } else {
        login.logOut();
        login.registerUser(vm.username, vm.email, vm.password);
        alert.addAlert({
          type: 'success',
          msg: 'User added successfully'
        });
      }
    }
  }
}());
