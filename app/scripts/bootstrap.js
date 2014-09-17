/*global define*/
define([
    'require',
    'angular',
    'app',
    'constants',
    'routes'
], function (require, ng) {
    'use strict';
 
    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});