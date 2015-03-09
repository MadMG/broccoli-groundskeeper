'use strict';
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');

describe('broccoli-groundskeeper', function () {
  afterEach(function () {
    rimraf.sync('temp');
  });

  it('should run code through Groundskeep4er', function () {
    assert.equal(
        fs.readFileSync(path.join(__dirname, 'temp/fixture.js'), 'utf8'),
        fs.readFileSync(path.join(__dirname, 'fixture/expected.js'), 'utf8')
    );
  });
});
