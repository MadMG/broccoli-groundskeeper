'use strict';
module.exports = require('./../index')('fixture', {
  'console': true,
  'pragmas': ['validation', 'development'],
  'debugger': true,
  'namespace': 'App.logger'
});