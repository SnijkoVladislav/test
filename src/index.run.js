(function() {

  'use strict';

  angular
    .module('app')
    .run(run)

  /** @ngInject */
  function run(cfCryptoHttpInterceptor, $rootScope, login, $location, alert, $document) {
    $rootScope.base64Key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef')
    $rootScope.iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');
    $rootScope.$on("$locationChangeStart", function() {
        if (!login.checkLogin() && $location.path() === '/search') {
            $location.path('/login');
            alert.addAlert({
              type: 'danger',
              msg: 'login please'
            });
        }
    });
  }
}());
