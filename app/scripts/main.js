require.config({

    baseUrl: 'scripts',

    paths: {
        domReady: '../../bower_components/requirejs-domready/domReady',
        angular: '../../bower_components/angular/angular',
        angularRoute: '../../bower_components/angular-route/angular-route'
    },

    shim: {
        angular: {
            exports: 'angular'
        }
    },

    deps: ['bootstrap']
});