(function() {

  'use strict';

  angular
    .module('app')
    .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        component: 'login'
      }).state('search', {
        url: '/search',
        component: 'search'
      }).state('register', {
        url: '/register',
        component: 'register'
      });
  }
}());
