Package.describe({
  name: 'tunifight:orion-lang-ar',
  version: '1.3.1',
  summary: 'Orion arabic language',
  git: 'https://github.com/nabiltntn/orion-lang-ar.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('orionjs:lang-en@1.3.0'); // This is the base language
  api.imply('orionjs:lang-en');

  api.addFiles('ar.js');
});