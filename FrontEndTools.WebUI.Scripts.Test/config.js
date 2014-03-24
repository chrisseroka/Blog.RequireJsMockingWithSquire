require.config({
    baseUrl: '../',
    paths: {
        'jasmine': 'FrontEndTools.WebUI.Scripts.Test/lib/jasmine/jasmine',
        'jasmine-html': 'FrontEndTools.WebUI.Scripts.Test/lib/jasmine/jasmine-html',
        'jasmine-boot': 'FrontEndTools.WebUI.Scripts.Test/lib/jasmine/boot',
        'knockout': 'FrontEndTools.WebUI/lib/knockout',
        'squire': 'FrontEndTools.WebUI.Scripts.Test/lib/squirejs/Squire'
    },
    shim: {
      'jasmine': {
        exports: 'jasmine'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'jasmine'
      },
      'jasmine-boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'jasmine'
      }
    }
});