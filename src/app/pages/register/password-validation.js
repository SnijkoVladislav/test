angular
  .module('app')
  .directive('serviceWhalePasswordValidation', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        ctrl.$validators.password = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }

          if (PASSWORD_REGEX.test(viewValue)) {
            return true;
          }

          return false;
        };
      }
    };
  });
