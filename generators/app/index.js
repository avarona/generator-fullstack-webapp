'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const {exec} = require('child_process');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wonderful ' + chalk.red('fullstack-webapp') + ' generator!'
    ));

    const array = this.env.cwd.split('/');

    const prompts = [{
      type: 'input',
      name: 'appName',
      message: 'Your project name',
      // Defaults to the project's folder name if the input is skipped
      default: this.appName || array[array.length - 1]
    }, {
      type: 'input',
      name: 'authorName',
      message: 'Your name',
      default: this.authorName
    }, {
      type: 'confirm',
      name: 'mkdirBool',
      message: 'Would you like to create a folder?',
      default: true
    }];

    return this.prompt(prompts.slice(0, 2)).then(props => {
      const done = this.async();
      this.inputs = props;
      this.appName = this.inputs.appName.trim().split(' ').join('-');
      this.authorName = this.inputs.authorName.trim().split(' ').join('-');

      return this.prompt(prompts[2]).then(prop => {
        this.inputs.mkdirBool = prop.mkdirBool;
        this.mkdirBool = prop.mkdirBool;
        done();
      })
        .catch(err => console.error(err));
    });
  }

  writing() {
    // Change cwd based on prompt
    let copyPath = this.env.cwd;
    if (this.mkdirBool) {
      copyPath = this.appName;
    }

    // Copy package.json
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath(path.join(copyPath, 'package.json')), {
        appName: this.appName,
        authorName: this.authorName
      }
    );

    this.fs.copyTpl(
      this.templatePath('config/_.env'),
      this.destinationPath(path.join(copyPath, '.env')), {
        database: this.appName
      }
    );

    // All other files & directories
    this.fs.copy(
      [
        this.templatePath('*.js'),
        this.templatePath('app'),
        this.templatePath('bin'),
        this.templatePath('config/!(_.env)'),
        this.templatePath('db'),
        this.templatePath('public'),
        this.templatePath('server'),
        this.templatePath('.gitignore')
      ], this.destinationPath(copyPath)
    );
  }

  install() {
    // Install dependencies in new directory
    const npmdir = path.join(process.cwd(), this.appName);
    if (this.mkdirBool) {
      process.chdir(npmdir);
    }

    // Create symlink for bin/setup
    const sympath = path.join(npmdir, 'bin');
    exec(`ln -s ${sympath}/setup.js ${sympath}/setup`);

    this.yarnInstall();
  }
};
