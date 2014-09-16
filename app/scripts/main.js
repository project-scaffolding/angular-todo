require.config({

    baseUrl: 'scripts',

    paths: {
        domReady: '../../bower_components/requirejs-domready/domReady',
        angular: '../../bower_components/angular/angular'
    },

    shim: {
        angular: {
            exports: 'angular'
        }
    },

    deps: ['bootstrap']
});