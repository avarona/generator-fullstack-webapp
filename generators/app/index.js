'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wonderful ' + chalk.red('fullstack-webapp') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }, {
      type: 'input',
      name: 'name',
      message: 'Your project name',
      // Defaults to the project's folder name if the input is skipped
      default: this.appname
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      const done = this.async();
      this.props = props;
      this.log(props.name)
      this.name = this.props.name;
      done();
    });
  }

  writing() {
    // Package.json
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name
      }
    );
    // Frontend
    this.fs.copy(
      this.templatePath('app'),
      this.destinationPath('app')
    );
    // Database
    this.fs.copy(
      this.templatePath('db'),
      this.destinationPath('db')
    );
    // Public
    this.fs.copy(
      this.templatePath('public'),
      this.destinationPath('public')
    );
    // Server
    this.fs.copy(
      this.templatePath('server'),
      this.destinationPath('server')
    );
    this.fs.copy(
      this.templatePath('app.js'),
      this.destinationPath('app.js')
    );
    // Bundler
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    // Readme.md
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
  }

  install() {
    this.npmInstall();
  }
};
