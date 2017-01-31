angular
  .module('app')
  .directive('serviceWhaleEmailValidation', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        ctrl.$validators.email = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }

          if (EMAIL_REGEX.test(viewValue)) {
            return true;
          }

          return false;
        };
      }
    };
  });
