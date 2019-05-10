var QUnit = require('steal-qunit');
var router = require('./can-router');

QUnit.module('can-router');

QUnit.test('Initialized the plugin', function(assert) {
  assert.equal(typeof router, 'function');
});
