'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-fullstack-webapp:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        someAnswer: true,
        appName: 'my new app',
        authorName: 'yours truly'
      });
  });

  it('creates files', () => {
    assert.file([
      'package.json',
      'app/components/Example.jsx',
      'app/containers/AppContainer.jsx',
      'app/origin.jsx',
      'app/redux/index.js',
      'app/redux/reducers/example.js',
      'app/routes.js',
      'app/store.jsx',
      'db/seed.js',
      'db/_db.js',
      'db/index.js',
      'db/models/user.js',
      'public/favicon.ico',
      'public/index.html',
      'public/sass/layout.scss',
      'server/index.js',
      'server/routes/examples.js',
      'app.js',
      'webpack.config.js'
    ]);
  });
});
