define([
    'app',
    'constants'
], function (app, constants) {
    'use strict';

    var ROUTES = constants.ROUTES,
        templatePath = 'scripts/tasks/templates/';
    
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when(ROUTES.HOME, { templateUrl: templatePath + 'home.html' });
        $routeProvider.when(ROUTES.ABOUT, { templateUrl: templatePath + 'about.html' });
        $routeProvider.otherwise({ redirectTo: ROUTES.HOME });

    }]);
});