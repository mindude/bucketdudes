'use strict';

describe('Controller: WeathersecureCtrl', function () {

  // load the controller's module
  beforeEach(module('bucketdudesApp'));

  var WeathersecureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeathersecureCtrl = $controller('WeathersecureCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WeathersecureCtrl.awesomeThings.length).toBe(3);
  });
});
