const express = require('express');
const path = require('path');
const webpackMiddleware = require('webpack-dev-middleware');
const favicon = require('serve-favicon');
const webpack = require('webpack');

const surveyData = require('./questions_mock');

const app = express();
const webpackConfig = require('../webpack.config.js');

app.use(favicon(path.join(__dirname, '/favicon.ico')));
app.use(webpackMiddleware(webpack(webpackConfig)));

// Send response with mock data
app.get('/api/survey', (req, res) => {
  res.send(surveyData);
});

module.exports = app;
