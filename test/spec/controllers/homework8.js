'use strict';

describe('Controller: Homework8Ctrl', function () {

  // load the controller's module
  beforeEach(module('bucketdudesApp'));

  var Homework8Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Homework8Ctrl = $controller('Homework8Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Homework8Ctrl.awesomeThings.length).toBe(3);
  });
});
