define([
    'angular',
    'constants',
    'angularRoute'
], function (angular, constants) {
    'use strict';

    var app;

    app = angular.module('app', ['ngRoute']);

    app.run(['$rootScope', function ($rootScope) {
        $rootScope.ROUTES = constants.ROUTES;
    }]);

    return app;
});