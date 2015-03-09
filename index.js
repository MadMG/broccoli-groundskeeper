'use strict';
var Filter = require('broccoli-filter');
var groundskeeper = require('groundskeeper');

function GroundskeeperFilter (inputTree, options) {
  if (!(this instanceof GroundskeeperFilter)) {
    return new GroundskeeperFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
}

GroundskeeperFilter.prototype = Object.create(Filter.prototype);
GroundskeeperFilter.prototype.constructor = GroundskeeperFilter;

GroundskeeperFilter.prototype.extensions = ['js'];
GroundskeeperFilter.prototype.targetExtension = 'js';

GroundskeeperFilter.prototype.canProcessFile = function (relativePath) {
  if (this.getDestFilePath(relativePath) != null) {
    var processFiles = this.options.processFiles || [];

    return processFiles.length === 0 || processFiles.some(function (fileToProcess) {
      return relativePath.indexOf(fileToProcess) !== -1;
    });
  }
  return false;
};

GroundskeeperFilter.prototype.processString = function (str) {
  var cleaner = groundskeeper(this.options);
  cleaner.write(str);
  return cleaner.toString();
};

module.exports = GroundskeeperFilter;
