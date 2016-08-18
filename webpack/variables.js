"use strict";
module.exports = () => {

    const vars = {};

    vars.path               = require('path');

    vars.webpack            = require('webpack');
    vars.chalk              = require('chalk');
    vars._                  = require('lodash');

    vars.ProgressBarPlugin  = require('progress-bar-webpack-plugin');
    vars.HtmlWebpackPlugin  = require('html-webpack-plugin');
    vars.BrowserSyncPlugin  = require('browser-sync-webpack-plugin');
    vars.StyleLintPlugin    = require('stylelint-webpack-plugin');

    vars.precss             = require('precss');
    vars.autoprefixer       = require('autoprefixer');

    vars.postcssImport      = require('postcss-import')({addDependencyTo: vars.webpack});

    vars.express            = require('express');
    vars.app                = require('express')();
    vars.morgan             = require('morgan');
    vars.karma              = require('karma');
    vars.karmaServer        = vars.karma.Server;
    vars.NODE_ENV           = process.env.NODE_ENV;

    return vars;
};