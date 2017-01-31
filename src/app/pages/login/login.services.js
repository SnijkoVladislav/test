(function() {

  'use strict';

  angular
    .module('app')
    .factory('login', loginFun);

  /** @ngInject */
  function loginFun($window, $rootScope) {
    var isLogin = false;

    function checkLogin() {
      return isLogin;
    }

    function logOut() {
      $window.localStorage.removeItem('serviceWhale');
      isLogin = false;
    }

    function registerUser(username, email, password) {
      $window.localStorage.setItem('serviceWhale', angular.toJson({
        name: username,
        email: email,
        password: CryptoJS.AES.encrypt(
          password,
          $rootScope.base64Key, {
            iv: $rootScope.iv
          }
        ).toString()
      }));
    }

    function checkUser(username, password) {
      var user = angular.fromJson($window.localStorage.getItem('serviceWhale'));

      if (!user) {
        return false;
      }

      var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(user.password)
      });

      var decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        $rootScope.base64Key, {
          iv: $rootScope.iv
        }
      ).toString(CryptoJS.enc.Utf8);


      if (user.name === username && decrypted === password) {
        isLogin = true;
        return true;
      } else {
        isLogin = false;
        return false;
      }
    };

    return {
      checkUser: checkUser,
      registerUser: registerUser,
      checkLogin: checkLogin,
      logOut: logOut
    };
  }
}());
