'use strict';

describe('Controller: Homework2Ctrl', function () {

  // load the controller's module
  beforeEach(module('bucketdudesApp'));

  var Homework2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Homework2Ctrl = $controller('Homework2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Homework2Ctrl.awesomeThings.length).toBe(3);
  });
});
