angular
  .module('app')
  .directive('serviceWhaleConfirmPasswordValidation', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.password = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }

          if (viewValue === attrs.serviceWhaleConfirmPasswordValidation) {
            return true;
          }

          return false;
        };
      }
    };
  });
