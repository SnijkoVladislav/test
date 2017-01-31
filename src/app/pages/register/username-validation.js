angular
  .module('app')
  .directive('serviceWhaleUsernameValidation', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var USERNAME_REGEX = /^[a-zA-Z0-9]+$/;
        ctrl.$validators.username = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }

          if (USERNAME_REGEX.test(viewValue)) {
            return true;
          }

          return false;
        };
      }
    };
  });
